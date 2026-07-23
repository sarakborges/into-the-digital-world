import type { ZoneMapRegistryType } from './ZoneMap.registry'

export type ZoneRuntimeRegistryType = ZoneMapRegistryType

export type RuntimeZoneId = Extract<keyof ZoneRuntimeRegistryType, string>

export type RuntimeZoneType = ZoneRuntimeRegistryType[RuntimeZoneId]

export type RuntimeMapType = {
  [Zone in RuntimeZoneId]: ZoneRuntimeRegistryType[Zone]['maps'][Extract<
    keyof ZoneRuntimeRegistryType[Zone]['maps'],
    string
  >]
}[RuntimeZoneId]
