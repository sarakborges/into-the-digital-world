export const ZoneManifest = {
  rootDomain: {
    name: 'Root Domain',
    maps: {
      coreChamber: {
        name: `Core Chamber`
      },
      corridor: {
        name: `Corridor`
      },
      restRoom: {
        name: `Bed Room`
      }
    }
  },
  wildZone: {
    name: 'Wild Zone',
    maps: {
      mainRoom: {
        name: `Wild Zone`
      }
    }
  }
} as const

export type ZoneId = Extract<keyof typeof ZoneManifest, string>

export type ZoneMapId<Zone extends ZoneId> = Extract<
  keyof (typeof ZoneManifest)[Zone]['maps'],
  string
>

type GetMapDefinitionParams = {
  zone: string
  map: string
}

export const findZoneDefinition = (zone: string) => {
  return ZoneManifest[zone as ZoneId]
}

export const getZoneDefinition = (zone: string) => {
  const definition = findZoneDefinition(zone)

  if (!definition) {
    throw new Error(`Unknown zone: ${zone}`)
  }

  return definition
}

export const findMapDefinition = ({ zone, map }: GetMapDefinitionParams) => {
  const definition = findZoneDefinition(zone)
  const maps = definition?.maps as Record<string, { name: string }> | undefined

  return maps?.[map]
}

export const getMapDefinition = (params: GetMapDefinitionParams) => {
  const definition = findMapDefinition(params)

  if (!definition) {
    throw new Error(`Unknown map: ${params.zone}.${params.map}`)
  }

  return definition
}
