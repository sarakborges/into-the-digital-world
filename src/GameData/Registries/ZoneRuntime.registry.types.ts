import type { MapType } from '@/Types/Zone.type'

import type {
  ZoneId,
  ZoneMapId
} from '@/GameData/Registries/ZoneManifest.registry'

type RuntimeMaps<Zone extends ZoneId> = Record<ZoneMapId<Zone>, MapType> &
  Record<string, MapType | undefined>

type RuntimeZoneDefinition<Zone extends ZoneId> = {
  name: string
  maps: RuntimeMaps<Zone>
}

export type ZoneRuntimeRegistryType = {
  [Zone in ZoneId]: RuntimeZoneDefinition<Zone>
}

export type RuntimeZoneType = {
  [Zone in ZoneId]: RuntimeZoneDefinition<Zone>
}[ZoneId]

export type RuntimeMapType = MapType
