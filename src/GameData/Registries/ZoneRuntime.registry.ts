import type {
  RuntimeMapType,
  RuntimeZoneType,
  ZoneRuntimeRegistryType
} from '@/GameData/Registries/ZoneRuntime.registry.types'

let runtimeRegistry: ZoneRuntimeRegistryType | undefined

export const registerZoneMapRegistry = (registry: ZoneRuntimeRegistryType) => {
  runtimeRegistry = registry
}

const getRuntimeRegistry = () => {
  if (!runtimeRegistry) {
    throw new Error('Zone map registry has not been initialized.')
  }

  return runtimeRegistry
}

export const findZone = (zone: string): RuntimeZoneType | undefined => {
  if (!runtimeRegistry) {
    return undefined
  }

  return Object.entries(runtimeRegistry).find(
    ([zoneId]) => zoneId === zone
  )?.[1]
}

export const getZone = (zone: string): RuntimeZoneType => {
  getRuntimeRegistry()
  const definition = findZone(zone)

  if (!definition) {
    throw new Error(`Unknown zone: ${zone}`)
  }

  return definition
}

type GetZoneMapParams = {
  zone: string
  map: string
}

export const findZoneMap = ({
  zone,
  map
}: GetZoneMapParams): RuntimeMapType | undefined => {
  const definition = findZone(zone)

  return definition?.maps[map]
}

export const getZoneMap = (params: GetZoneMapParams): RuntimeMapType => {
  const map = findZoneMap(params)

  if (!map) {
    throw new Error(`Unknown map: ${params.zone}.${params.map}`)
  }

  return map
}
