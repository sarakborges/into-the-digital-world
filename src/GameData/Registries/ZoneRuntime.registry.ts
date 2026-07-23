import type {
  RuntimeMapType,
  RuntimeZoneId,
  RuntimeZoneType,
  ZoneRuntimeRegistryType
} from './ZoneRuntime.registry.types'

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
  return runtimeRegistry?.[zone as RuntimeZoneId]
}

export const getZone = (zone: string): RuntimeZoneType => {
  const definition = getRuntimeRegistry()[zone as RuntimeZoneId]

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
  const maps = definition?.maps as Record<string, RuntimeMapType> | undefined

  return maps?.[map]
}

export const getZoneMap = (params: GetZoneMapParams): RuntimeMapType => {
  const map = findZoneMap(params)

  if (!map) {
    throw new Error(`Unknown map: ${params.zone}.${params.map}`)
  }

  return map
}
