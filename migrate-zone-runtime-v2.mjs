#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { spawnSync } from 'node:child_process'

const require = createRequire(import.meta.url)
let ts
try {
  ts = require('typescript')
} catch {
  console.error('TypeScript is required. Install it with: npm install -D typescript')
  process.exit(1)
}

const argv = process.argv.slice(2)
const hasFlag = (flag) => argv.includes(flag)
const readOption = (name, fallback) => {
  const prefix = `${name}=`
  const item = argv.find((arg) => arg.startsWith(prefix))
  return item ? item.slice(prefix.length) : fallback
}

const root = path.resolve(readOption('--root', process.cwd()))
const srcRoot = path.resolve(root, readOption('--src', 'src'))
const tsconfigPath = path.resolve(root, readOption('--tsconfig', 'tsconfig.json'))
const shouldWrite = hasFlag('--write')
const shouldFormat = hasFlag('--format')
const shouldTypecheck = hasFlag('--typecheck')
const strict = hasFlag('--strict')

const normalize = (value) => value.split(path.sep).join('/')
const isInside = (parent, child) => {
  const relative = path.relative(parent, child)
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative))
}

if (!fs.existsSync(tsconfigPath)) {
  console.error(`Could not find tsconfig: ${tsconfigPath}`)
  process.exit(1)
}

const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile)
if (configFile.error) {
  console.error(ts.flattenDiagnosticMessageText(configFile.error.messageText, '\n'))
  process.exit(1)
}

const parsedConfig = ts.parseJsonConfigFileContent(
  configFile.config,
  ts.sys,
  root,
  undefined,
  tsconfigPath
)

if (parsedConfig.errors.length) {
  console.error(
    ts.formatDiagnosticsWithColorAndContext(parsedConfig.errors, {
      getCanonicalFileName: (fileName) => fileName,
      getCurrentDirectory: () => root,
      getNewLine: () => ts.sys.newLine
    })
  )
  process.exit(1)
}

const program = ts.createProgram({
  rootNames: parsedConfig.fileNames,
  options: parsedConfig.options
})
const checker = program.getTypeChecker()
const sourceFiles = program
  .getSourceFiles()
  .filter((sourceFile) => !sourceFile.isDeclarationFile && isInside(srcRoot, sourceFile.fileName))

const unwrap = (node) => {
  let current = node
  while (
    current &&
    (ts.isParenthesizedExpression(current) ||
      ts.isAsExpression(current) ||
      ts.isTypeAssertionExpression(current) ||
      ts.isNonNullExpression(current) ||
      ts.isSatisfiesExpression?.(current))
  ) {
    current = current.expression
  }
  return current
}

const resolveAlias = (symbol) => {
  let current = symbol
  const visited = new Set()
  while (current && (current.flags & ts.SymbolFlags.Alias) !== 0) {
    if (visited.has(current)) break
    visited.add(current)
    current = checker.getAliasedSymbol(current)
  }
  return current
}

const symbolAt = (node) => resolveAlias(checker.getSymbolAtLocation(node))

const findExportedSymbol = (name) => {
  for (const sourceFile of sourceFiles) {
    const moduleSymbol = sourceFile.symbol ?? checker.getSymbolAtLocation(sourceFile)
    if (!moduleSymbol) continue
    for (const exported of checker.getExportsOfModule(moduleSymbol)) {
      if (exported.getName() !== name) continue
      const actual = resolveAlias(exported)
      const declaration = (actual?.getDeclarations() ?? []).find((item) =>
        isInside(srcRoot, item.getSourceFile().fileName)
      )
      if (actual && declaration) {
        return { symbol: actual, declaration, sourceFile: declaration.getSourceFile() }
      }
    }
  }
  return undefined
}

const allZones = findExportedSymbol('AllZones')
if (!allZones) {
  console.log('AllZones was not found. Nothing to migrate.')
  process.exit(0)
}

const absoluteImportPath = (sourceFile) => {
  let relative = normalize(path.relative(srcRoot, sourceFile.fileName))
  relative = relative.replace(/\.d\.(ts|tsx|mts|cts)$/, '')
  relative = relative.replace(/\.(ts|tsx|js|jsx|mts|cts|mjs|cjs)$/, '')
  relative = relative.replace(/\/index$/, '')
  return `@/${relative}`
}

const getDeclarationInitializer = (declaration) => {
  if (ts.isVariableDeclaration(declaration)) return declaration.initializer
  if (ts.isPropertyAssignment(declaration)) return declaration.initializer
  if (ts.isBindingElement(declaration)) return declaration.initializer
  return undefined
}

const resolveExpression = (expression, visited = new Set()) => {
  const node = unwrap(expression)
  if (!node) return undefined
  if (ts.isObjectLiteralExpression(node)) return node

  if (ts.isIdentifier(node) || ts.isPropertyAccessExpression(node)) {
    const symbol = symbolAt(ts.isPropertyAccessExpression(node) ? node.name : node)
    if (!symbol || visited.has(symbol)) return undefined
    visited.add(symbol)
    for (const declaration of symbol.getDeclarations() ?? []) {
      const initializer = getDeclarationInitializer(declaration)
      if (!initializer) continue
      const resolved = resolveExpression(initializer, visited)
      if (resolved) return resolved
    }
  }

  return undefined
}

const registryInitializer = getDeclarationInitializer(allZones.declaration)
const registryObject = registryInitializer ? resolveExpression(registryInitializer) : undefined
if (!registryObject) {
  console.error(
    `AllZones must resolve to an object literal. Found declaration in ${normalize(
      path.relative(root, allZones.sourceFile.fileName)
    )}`
  )
  process.exit(1)
}

const staticPropertyName = (name) => {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text
  }
  if (ts.isComputedPropertyName(name)) {
    const expression = unwrap(name.expression)
    if (ts.isStringLiteral(expression) || ts.isNumericLiteral(expression)) return expression.text
  }
  return undefined
}

const propertyEntry = (property) => {
  if (ts.isPropertyAssignment(property)) {
    const key = staticPropertyName(property.name)
    return key === undefined ? undefined : { key, expression: property.initializer }
  }
  if (ts.isShorthandPropertyAssignment(property)) {
    return { key: property.name.text, expression: property.name }
  }
  return undefined
}

const zoneEntries = []
const problems = []

for (const property of registryObject.properties) {
  const entry = propertyEntry(property)
  if (!entry) continue
  const objectLiteral = resolveExpression(entry.expression)
  if (!objectLiteral) {
    problems.push(`Could not resolve the zone definition for ${entry.key}.`)
    continue
  }

  zoneEntries.push({
    key: entry.key,
    objectLiteral
  })
}

if (problems.length || !zoneEntries.length) {
  console.error('Could not safely create the runtime zone registry:')
  for (const problem of problems) console.error(`- ${problem}`)
  if (!zoneEntries.length) console.error('- No zone entries were discovered.')
  console.error('\nNo files were changed.')
  process.exit(1)
}

const isRuntimeImport = (statement) => {
  if (!ts.isImportDeclaration(statement)) return false
  const clause = statement.importClause
  if (!clause) return true
  if (clause.isTypeOnly) return false

  const bindings = clause.namedBindings
  if (
    !clause.name &&
    bindings &&
    ts.isNamedImports(bindings) &&
    bindings.elements.length > 0 &&
    bindings.elements.every((element) => element.isTypeOnly)
  ) {
    return false
  }

  return true
}

const resolveImportModulePath = (sourceFile, moduleSpecifier) => {
  if (!moduleSpecifier.startsWith('.')) return moduleSpecifier

  const resolved = ts.resolveModuleName(
    moduleSpecifier,
    sourceFile.fileName,
    parsedConfig.options,
    ts.sys
  ).resolvedModule

  if (!resolved?.resolvedFileName) {
    throw new Error(
      `Could not resolve import ${moduleSpecifier} from ${normalize(
        path.relative(root, sourceFile.fileName)
      )}`
    )
  }

  const resolvedFile = program.getSourceFile(resolved.resolvedFileName)
  if (resolvedFile && isInside(srcRoot, resolvedFile.fileName)) {
    return absoluteImportPath(resolvedFile)
  }

  let relative = normalize(path.relative(srcRoot, resolved.resolvedFileName))
  relative = relative.replace(/\.d\.(ts|tsx|mts|cts)$/, '')
  relative = relative.replace(/\.(ts|tsx|js|jsx|mts|cts|mjs|cjs)$/, '')
  relative = relative.replace(/\/index$/, '')
  return `@/${relative}`
}

const renderRelocatedImport = (statement) => {
  const sourceFile = statement.getSourceFile()
  const moduleSpecifier = statement.moduleSpecifier.text
  const relocatedModule = resolveImportModulePath(sourceFile, moduleSpecifier)
  const clause = statement.importClause

  if (!clause) return `import '${relocatedModule}'`
  return `import ${clause.getText(sourceFile)} from '${relocatedModule}'`
}

const relocatedRuntimeImports = allZones.sourceFile.statements
  .filter(isRuntimeImport)
  .map(renderRelocatedImport)

const registryObjectText = registryObject.getText(registryObject.getSourceFile())

const renderKey = (key) => (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : JSON.stringify(key))
const registriesDir = path.join(srcRoot, 'GameData', 'Registries')
const typesPath = path.join(registriesDir, 'ZoneRuntime.registry.types.ts')
const runtimePath = path.join(registriesDir, 'ZoneRuntime.registry.ts')
const mapRegistryPath = path.join(registriesDir, 'ZoneMap.registry.ts')
const runtimeModule = '@/GameData/Registries/ZoneRuntime.registry'
const mapRegistryModule = '@/GameData/Registries/ZoneMap.registry'

const typesLines = [
  "import type { ZoneMapRegistryType } from './ZoneMap.registry'",
  '',
  'export type ZoneRuntimeRegistryType = ZoneMapRegistryType',
  '',
  'export type RuntimeZoneId = Extract<keyof ZoneRuntimeRegistryType, string>',
  '',
  'export type RuntimeZoneType = ZoneRuntimeRegistryType[RuntimeZoneId]',
  '',
  'export type RuntimeMapType = {',
  "  [Zone in RuntimeZoneId]: ZoneRuntimeRegistryType[Zone]['maps'][Extract<",
  "    keyof ZoneRuntimeRegistryType[Zone]['maps'],",
  '    string',
  '  >]',
  '}[RuntimeZoneId]',
  ''
]

const runtimeLines = [
  "import type { RuntimeMapType, RuntimeZoneId, RuntimeZoneType, ZoneRuntimeRegistryType } from './ZoneRuntime.registry.types'",
  '',
  'let runtimeRegistry: ZoneRuntimeRegistryType | undefined',
  '',
  'export const registerZoneMapRegistry = (registry: ZoneRuntimeRegistryType) => {',
  '  runtimeRegistry = registry',
  '}',
  '',
  'const getRuntimeRegistry = () => {',
  '  if (!runtimeRegistry) {',
  "    throw new Error('Zone map registry has not been initialized.')",
  '  }',
  '',
  '  return runtimeRegistry',
  '}',
  '',
  'export const findZone = (zone: string): RuntimeZoneType | undefined => {',
  '  return runtimeRegistry?.[zone as RuntimeZoneId]',
  '}',
  '',
  'export const getZone = (zone: string): RuntimeZoneType => {',
  '  const definition = getRuntimeRegistry()[zone as RuntimeZoneId]',
  '',
  '  if (!definition) {',
  '    throw new Error(`Unknown zone: ${zone}`)',
  '  }',
  '',
  '  return definition',
  '}',
  '',
  'type GetZoneMapParams = {',
  '  zone: string',
  '  map: string',
  '}',
  '',
  'export const findZoneMap = ({',
  '  zone,',
  '  map',
  '}: GetZoneMapParams): RuntimeMapType | undefined => {',
  '  const definition = findZone(zone)',
  '  const maps = definition?.maps as Record<string, RuntimeMapType> | undefined',
  '',
  '  return maps?.[map]',
  '}',
  '',
  'export const getZoneMap = (params: GetZoneMapParams): RuntimeMapType => {',
  '  const map = findZoneMap(params)',
  '',
  '  if (!map) {',
  '    throw new Error(`Unknown map: ${params.zone}.${params.map}`)',
  '  }',
  '',
  '  return map',
  '}',
  ''
]

const mapRegistryLines = [
  ...relocatedRuntimeImports,
  "import { registerZoneMapRegistry } from './ZoneRuntime.registry'",
  '',
  `export const ZoneMapRegistry = ${registryObjectText}`,
  '',
  'export type ZoneMapRegistryType = typeof ZoneMapRegistry',
  '',
  'registerZoneMapRegistry(ZoneMapRegistry)',
  ''
]

const generatedFiles = [
  { fileName: typesPath, text: `${typesLines.join('\n')}\n`, generated: true },
  { fileName: runtimePath, text: `${runtimeLines.join('\n')}\n`, generated: true },
  { fileName: mapRegistryPath, text: `${mapRegistryLines.join('\n')}\n`, generated: true }
]

const editsByFile = new Map()
const importsByFile = new Map()
const typeImportsByFile = new Map()
const reports = []

const addEdit = (sourceFile, start, end, text, reason) => {
  const edits = editsByFile.get(sourceFile.fileName) ?? []
  edits.push({ start, end, text, reason })
  editsByFile.set(sourceFile.fileName, edits)
}

const addImport = (sourceFile, name) => {
  const names = importsByFile.get(sourceFile.fileName) ?? new Set()
  names.add(name)
  importsByFile.set(sourceFile.fileName, names)
}

const addTypeImport = (sourceFile, name) => {
  const names = typeImportsByFile.get(sourceFile.fileName) ?? new Set()
  names.add(name)
  typeImportsByFile.set(sourceFile.fileName, names)
}

const objectPropertyRemovalRange = (objectLiteral, property) => {
  const sourceFile = objectLiteral.getSourceFile()
  const text = sourceFile.getFullText()
  let start = property.getFullStart()
  let end = property.end

  let cursor = end
  while (cursor < text.length && /[ \t]/.test(text[cursor])) cursor += 1
  if (text[cursor] === ',') {
    end = cursor + 1
    return { start, end }
  }

  cursor = property.getStart(sourceFile) - 1
  while (cursor >= objectLiteral.getStart(sourceFile) && /\s/.test(text[cursor])) cursor -= 1
  if (text[cursor] === ',') start = cursor
  return { start, end }
}

const removedZoneTypeIdDeclarations = new Set()

for (const entry of zoneEntries) {
  const objectLiteral = entry.objectLiteral
  if (!objectLiteral) continue
  const idProperty = objectLiteral.properties.find((property) => {
    if (!property.name) return false
    return staticPropertyName(property.name) === 'id'
  })
  if (!idProperty) continue
  const range = objectPropertyRemovalRange(objectLiteral, idProperty)
  addEdit(
    objectLiteral.getSourceFile(),
    range.start,
    range.end,
    '',
    `remove redundant zone id from ${entry.key}`
  )
  const point = objectLiteral.getSourceFile().getLineAndCharacterOfPosition(
    idProperty.getStart(objectLiteral.getSourceFile())
  )
  reports.push(
    `${normalize(path.relative(root, objectLiteral.getSourceFile().fileName))}:${point.line + 1}:${point.character + 1}: removed redundant zone id`
  )

  const contextualType = checker.getContextualType(objectLiteral)
  const contextualId = contextualType?.getProperty('id')
  for (const declaration of contextualId?.getDeclarations() ?? []) {
    if (!isInside(srcRoot, declaration.getSourceFile().fileName)) continue
    if (declaration === idProperty) continue
    if (!ts.isPropertySignature(declaration) && !ts.isPropertyDeclaration(declaration)) continue
    const declarationKey = `${declaration.getSourceFile().fileName}:${declaration.pos}:${declaration.end}`
    if (removedZoneTypeIdDeclarations.has(declarationKey)) continue
    removedZoneTypeIdDeclarations.add(declarationKey)
    const typeRange = objectPropertyRemovalRange(declaration.parent, declaration)
    addEdit(
      declaration.getSourceFile(),
      typeRange.start,
      typeRange.end,
      '',
      'remove redundant id from the contextual zone type'
    )
    const typePoint = declaration.getSourceFile().getLineAndCharacterOfPosition(
      declaration.getStart(declaration.getSourceFile())
    )
    reports.push(
      `${normalize(path.relative(root, declaration.getSourceFile().fileName))}:${typePoint.line + 1}:${typePoint.character + 1}: removed id from zone type`
    )
  }
}

const isAllZonesIdentifier = (node) =>
  ts.isIdentifier(node) && symbolAt(node) === allZones.symbol

const location = (sourceFile, node) => {
  const point = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile))
  return `${normalize(path.relative(root, sourceFile.fileName))}:${point.line + 1}:${point.character + 1}`
}

const nodeText = (sourceFile, node) => {
  const text = node.getText(sourceFile)
  if (/\btypeof\s+AllZones\b/.test(text)) {
    addTypeImport(sourceFile, 'ZoneRuntimeRegistryType')
    return text.replace(/\btypeof\s+AllZones\b/g, 'ZoneRuntimeRegistryType')
  }
  return text
}

for (const sourceFile of sourceFiles) {
  if (sourceFile === allZones.sourceFile) continue
  const visit = (node) => {
    // typeof AllZones in type positions
    if (ts.isTypeQueryNode(node)) {
      const expressionName = node.exprName
      if (ts.isIdentifier(expressionName) && isAllZonesIdentifier(expressionName)) {
        addEdit(
          sourceFile,
          node.getStart(sourceFile),
          node.end,
          'ZoneRuntimeRegistryType',
          'zone registry type query'
        )
        addTypeImport(sourceFile, 'ZoneRuntimeRegistryType')
        reports.push(`${location(sourceFile, node)}: typeof AllZones -> ZoneRuntimeRegistryType`)
        return
      }
    }

    // AllZones[zone].maps[map]
    if (ts.isElementAccessExpression(node)) {
      const mapsAccess = unwrap(node.expression)
      if (ts.isPropertyAccessExpression(mapsAccess) && mapsAccess.name.text === 'maps') {
        const zoneAccess = unwrap(mapsAccess.expression)
        if (
          ts.isElementAccessExpression(zoneAccess) &&
          isAllZonesIdentifier(unwrap(zoneAccess.expression))
        ) {
          const zone = nodeText(sourceFile, zoneAccess.argumentExpression)
          const map = nodeText(sourceFile, node.argumentExpression)
          addEdit(
            sourceFile,
            node.getStart(sourceFile),
            node.end,
            `getZoneMap({ zone: ${zone}, map: ${map} })`,
            'zone map lookup'
          )
          addImport(sourceFile, 'getZoneMap')
          reports.push(`${location(sourceFile, node)}: getZoneMap({ zone, map })`)
          return
        }
      }
    }

    // AllZones[zone]
    if (
      ts.isElementAccessExpression(node) &&
      isAllZonesIdentifier(unwrap(node.expression))
    ) {
      const parent = node.parent
      const isPartOfMapLookup =
        ts.isPropertyAccessExpression(parent) &&
        parent.expression === node &&
        parent.name.text === 'maps'
      if (!isPartOfMapLookup) {
        const zone = nodeText(sourceFile, node.argumentExpression)
        addEdit(
          sourceFile,
          node.getStart(sourceFile),
          node.end,
          `getZone(${zone})`,
          'zone lookup'
        )
        addImport(sourceFile, 'getZone')
        reports.push(`${location(sourceFile, node)}: getZone(zone)`)
        return
      }
    }

    ts.forEachChild(node, visit)
  }
  visit(sourceFile)
}

const applyEdits = (text, edits) => {
  const ordered = [...edits].sort((a, b) => b.start - a.start || b.end - a.end)
  let result = text
  let lastStart = Infinity
  for (const edit of ordered) {
    if (edit.end > lastStart) continue
    result = result.slice(0, edit.start) + edit.text + result.slice(edit.end)
    lastStart = edit.start
  }
  return result
}

const insertNamedImport = (fileName, text, modulePath, names) => {
  if (!names?.size) return text
  const sourceFile = ts.createSourceFile(fileName, text, ts.ScriptTarget.Latest, true)
  const existing = sourceFile.statements.find(
    (statement) =>
      ts.isImportDeclaration(statement) &&
      ts.isStringLiteral(statement.moduleSpecifier) &&
      statement.moduleSpecifier.text === modulePath
  )

  if (existing && ts.isImportDeclaration(existing)) {
    const clause = existing.importClause
    const named = clause?.namedBindings
    if (named && ts.isNamedImports(named)) {
      const current = new Set(named.elements.map((element) => element.name.text))
      for (const name of names) current.add(name)
      const replacement = `import { ${[...current].sort().join(', ')} } from '${modulePath}'`
      return text.slice(0, existing.getStart(sourceFile)) + replacement + text.slice(existing.end)
    }
  }

  const importText = `import { ${[...names].sort().join(', ')} } from '${modulePath}'\n`
  const imports = sourceFile.statements.filter(ts.isImportDeclaration)
  const position = imports.length ? imports[imports.length - 1].end : 0
  return `${text.slice(0, position)}${position ? '\n' : ''}${importText}${text.slice(position)}`
}

const insertTypeImport = (fileName, text, modulePath, names) => {
  if (!names?.size) return text
  const sourceFile = ts.createSourceFile(fileName, text, ts.ScriptTarget.Latest, true)
  const existing = sourceFile.statements.find(
    (statement) =>
      ts.isImportDeclaration(statement) &&
      statement.importClause?.isTypeOnly &&
      ts.isStringLiteral(statement.moduleSpecifier) &&
      statement.moduleSpecifier.text === modulePath
  )

  if (existing && ts.isImportDeclaration(existing)) {
    const named = existing.importClause?.namedBindings
    if (named && ts.isNamedImports(named)) {
      const current = new Set(named.elements.map((element) => element.name.text))
      for (const name of names) current.add(name)
      const replacement = `import type { ${[...current].sort().join(', ')} } from '${modulePath}'`
      return text.slice(0, existing.getStart(sourceFile)) + replacement + text.slice(existing.end)
    }
  }

  const importText = `import type { ${[...names].sort().join(', ')} } from '${modulePath}'\n`
  const imports = sourceFile.statements.filter(ts.isImportDeclaration)
  const position = imports.length ? imports[imports.length - 1].end : 0
  return `${text.slice(0, position)}${position ? '\n' : ''}${importText}${text.slice(position)}`
}

const removeNamedImportIfUnused = (fileName, text, importedName) => {
  let sourceFile = ts.createSourceFile(fileName, text, ts.ScriptTarget.Latest, true)
  let hasUsage = false
  const visit = (node) => {
    if (hasUsage) return
    if (ts.isIdentifier(node) && node.text === importedName) {
      const parent = node.parent
      const isImport =
        ts.isImportSpecifier(parent) ||
        (ts.isImportClause(parent) && parent.name === node) ||
        ts.isNamespaceImport(parent)
      if (!isImport) hasUsage = true
    }
    ts.forEachChild(node, visit)
  }
  visit(sourceFile)
  if (hasUsage) return text

  const edits = []
  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement)) continue
    const clause = statement.importClause
    const named = clause?.namedBindings
    if (!named || !ts.isNamedImports(named)) continue
    const target = named.elements.find((element) => element.name.text === importedName)
    if (!target) continue
    const remaining = named.elements.filter((element) => element !== target)
    if (!remaining.length && !clause?.name) {
      let end = statement.end
      if (text[end] === '\r' && text[end + 1] === '\n') end += 2
      else if (text[end] === '\n') end += 1
      edits.push({ start: statement.getStart(sourceFile), end, text: '' })
    } else {
      const defaultPart = clause?.name ? `${clause.name.text}, ` : ''
      const namedPart = remaining.map((element) => element.getText(sourceFile)).join(', ')
      edits.push({
        start: statement.getStart(sourceFile),
        end: statement.end,
        text: `import ${defaultPart}{ ${namedPart} } from ${statement.moduleSpecifier.getText(sourceFile)}`
      })
    }
  }
  return applyEdits(text, edits)
}

const changedFiles = []
for (const sourceFile of sourceFiles) {
  if (sourceFile === allZones.sourceFile) continue
  const edits = editsByFile.get(sourceFile.fileName) ?? []
  const imports = importsByFile.get(sourceFile.fileName)
  const typeImports = typeImportsByFile.get(sourceFile.fileName)
  if (!edits.length && !imports?.size && !typeImports?.size) continue
  const original = fs.readFileSync(sourceFile.fileName, 'utf8')
  let updated = applyEdits(original, edits)
  updated = insertNamedImport(sourceFile.fileName, updated, runtimeModule, imports)
  updated = insertTypeImport(
    sourceFile.fileName,
    updated,
    '@/GameData/Registries/ZoneRuntime.registry.types',
    typeImports
  )
  updated = removeNamedImportIfUnused(sourceFile.fileName, updated, 'AllZones')
  if (updated !== original) changedFiles.push({ fileName: sourceFile.fileName, text: updated })
}

// Remove the old AllZones declaration and imports that become unused in its source file.
{
  const sourceFile = allZones.sourceFile
  const original = fs.readFileSync(sourceFile.fileName, 'utf8')
  let declarationNode = allZones.declaration
  if (ts.isVariableDeclaration(declarationNode)) {
    const declarationList = declarationNode.parent
    const statement = declarationList?.parent
    if (statement && ts.isVariableStatement(statement)) declarationNode = statement
  }

  let start = declarationNode.getFullStart()
  let end = declarationNode.end
  if (original[end] === '\r' && original[end + 1] === '\n') end += 2
  else if (original[end] === '\n') end += 1
  let updated = original.slice(0, start) + original.slice(end)

  // Remove imports no longer referenced after deleting the registry declaration.
  let parsed = ts.createSourceFile(sourceFile.fileName, updated, ts.ScriptTarget.Latest, true)
  const unusedImportEdits = []
  for (const statement of parsed.statements) {
    if (!ts.isImportDeclaration(statement)) continue
    const clause = statement.importClause
    if (!clause) continue

    const localNames = []
    if (clause.name) localNames.push(clause.name.text)
    const bindings = clause.namedBindings
    if (bindings && ts.isNamedImports(bindings)) {
      for (const element of bindings.elements) localNames.push(element.name.text)
    } else if (bindings && ts.isNamespaceImport(bindings)) {
      localNames.push(bindings.name.text)
    }

    const usedNames = new Set()
    const scan = (node) => {
      if (ts.isImportDeclaration(node)) return
      if (ts.isIdentifier(node) && localNames.includes(node.text)) usedNames.add(node.text)
      ts.forEachChild(node, scan)
    }
    scan(parsed)

    if (clause.name && !usedNames.has(clause.name.text)) {
      // Default + named cleanup is uncommon here; keep it unless the whole import is unused.
    }

    if (bindings && ts.isNamedImports(bindings)) {
      const remaining = bindings.elements.filter((element) => usedNames.has(element.name.text))
      const defaultUsed = clause.name ? usedNames.has(clause.name.text) : false
      if (!remaining.length && !defaultUsed) {
        let statementEnd = statement.end
        if (updated[statementEnd] === '\r' && updated[statementEnd + 1] === '\n') statementEnd += 2
        else if (updated[statementEnd] === '\n') statementEnd += 1
        unusedImportEdits.push({ start: statement.getStart(parsed), end: statementEnd, text: '' })
      } else if (remaining.length !== bindings.elements.length) {
        const defaultPart = defaultUsed && clause.name ? `${clause.name.text}, ` : ''
        const namedPart = remaining.map((element) => element.getText(parsed)).join(', ')
        unusedImportEdits.push({
          start: statement.getStart(parsed),
          end: statement.end,
          text: `import ${defaultPart}{ ${namedPart} } from ${statement.moduleSpecifier.getText(parsed)}`
        })
      }
    } else if (bindings && ts.isNamespaceImport(bindings) && !usedNames.has(bindings.name.text)) {
      let statementEnd = statement.end
      if (updated[statementEnd] === '\r' && updated[statementEnd + 1] === '\n') statementEnd += 2
      else if (updated[statementEnd] === '\n') statementEnd += 1
      unusedImportEdits.push({ start: statement.getStart(parsed), end: statementEnd, text: '' })
    } else if (clause.name && !bindings && !usedNames.has(clause.name.text)) {
      let statementEnd = statement.end
      if (updated[statementEnd] === '\r' && updated[statementEnd + 1] === '\n') statementEnd += 2
      else if (updated[statementEnd] === '\n') statementEnd += 1
      unusedImportEdits.push({ start: statement.getStart(parsed), end: statementEnd, text: '' })
    }
  }
  updated = applyEdits(updated, unusedImportEdits)
  if (!updated.trim()) updated = 'export {}\n'
  if (updated !== original) changedFiles.push({ fileName: sourceFile.fileName, text: updated })
}

for (const generated of generatedFiles) {
  const current = fs.existsSync(generated.fileName)
    ? fs.readFileSync(generated.fileName, 'utf8')
    : undefined
  if (current !== generated.text) changedFiles.push(generated)
}

const entryCandidates = [
  path.join(srcRoot, 'main.tsx'),
  path.join(srcRoot, 'main.ts'),
  path.join(srcRoot, 'index.tsx'),
  path.join(srcRoot, 'index.ts')
]
let entryPath = entryCandidates.find((candidate) => fs.existsSync(candidate))
if (!entryPath) {
  entryPath = sourceFiles.find((sourceFile) => {
    const text = sourceFile.getFullText()
    return /\bcreateRoot\s*\(|\bReactDOM\.createRoot\s*\(/.test(text)
  })?.fileName
}

if (!entryPath) {
  console.error('Could not find the application entrypoint (main.tsx/main.ts/index.tsx/index.ts).')
  console.error('No files were changed.')
  process.exit(1)
}

{
  const existingChange = changedFiles.find((file) => file.fileName === entryPath)
  const original = existingChange?.text ?? fs.readFileSync(entryPath, 'utf8')
  if (!original.includes(`'${mapRegistryModule}'`) && !original.includes(`\"${mapRegistryModule}\"`)) {
    const updated = `import '${mapRegistryModule}'\n${original}`
    if (existingChange) existingChange.text = updated
    else changedFiles.push({ fileName: entryPath, text: updated })
  }
}

// Verify that only the declaration itself existed and was removed.
const remainingReports = []
for (const sourceFile of sourceFiles) {
  const visit = (node) => {
    if (!isAllZonesIdentifier(node)) {
      ts.forEachChild(node, visit)
      return
    }
    const parent = node.parent
    if (ts.isImportSpecifier(parent) || ts.isImportClause(parent)) return
    if (
      sourceFile === allZones.sourceFile &&
      node.getStart(sourceFile) >= allZones.declaration.getStart(sourceFile) &&
      node.end <= allZones.declaration.end
    ) {
      return
    }
    const covered = (editsByFile.get(sourceFile.fileName) ?? []).some(
      (edit) => node.getStart(sourceFile) >= edit.start && node.end <= edit.end
    )
    if (!covered) remainingReports.push(location(sourceFile, node))
  }
  visit(sourceFile)
}

console.log(`${shouldWrite ? 'Prepared' : 'Would prepare'} ${changedFiles.length} changed file(s).`)
for (const file of changedFiles) {
  console.log(`- ${normalize(path.relative(root, file.fileName))}${file.generated ? ' [generated]' : ''}`)
}

if (reports.length) {
  console.log(`\nRuntime zone lookups migrated (${reports.length})`)
  for (const report of reports) console.log(`- ${report}`)
}

if (remainingReports.length) {
  console.log(`\nUnconverted AllZones references (${remainingReports.length})`)
  for (const item of [...new Set(remainingReports)]) console.log(`- ${item}`)
}

if (!shouldWrite) {
  console.log('\nDry run only. Run again with --write to apply these changes.')
  process.exit(0)
}

for (const file of changedFiles) {
  fs.mkdirSync(path.dirname(file.fileName), { recursive: true })
  fs.writeFileSync(file.fileName, file.text, 'utf8')
}

const run = (command, args) => {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32'
  })
  if (result.status !== 0) process.exitCode = result.status ?? 1
}

if (shouldFormat) {
  const paths = changedFiles.map((file) => normalize(path.relative(root, file.fileName)))
  if (paths.length) run('npx', ['prettier', '--write', ...paths])
}

if (shouldTypecheck) run('npx', ['tsc', '--noEmit'])
if (strict && process.exitCode) process.exit(process.exitCode)
