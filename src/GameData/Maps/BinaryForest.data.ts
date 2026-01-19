import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { MapTypes, type MapType } from '@/Types/Map.type'

export const BINARY_FOREST: MapType = {
  id: `BINARY_FOREST`,
  name: `Binary Forest`,
  description: `Geometric trees grow in binary patterns, their leaves flickering between zeros and ones. The environment is calm yet unstable — the place where the domain begins to fracture.`,
  types: [MapTypes.COMBAT],
  maxEnemiesPerEncounter: 1,
  enemyLevelRange: {
    min: 1,
    max: 1
  },

  wildDigimons: [
    {
      id: `BINARY_FOREST_KOROMON`,
      baseDigimon: `KOROMON`,

      lootTable: [
        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.dragonsRoar.id,
          quantity: {
            min: 0,
            max: 3
          }
        },

        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.virusBusters.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_TUNOMON`,
      baseDigimon: `TUNOMON`,

      lootTable: [
        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.natureSpirits.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_MOCHIMON`,
      baseDigimon: `MOCHIMON`,

      lootTable: [
        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.metalEmpire.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_NYAROMON`,
      baseDigimon: `NYAROMON`,

      lootTable: [
        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.natureSpirits.id,
          quantity: {
            min: 0,
            max: 3
          }
        },

        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.virusBusters.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_TOKOMON`,
      baseDigimon: `TOKOMON`,

      lootTable: [
        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.windGuardians.id,
          quantity: {
            min: 0,
            max: 3
          }
        },

        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.virusBusters.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_TANEMON`,
      baseDigimon: `TANEMON`,

      lootTable: [
        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.jungleTroopers.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_BUKAMON`,
      baseDigimon: `BUKAMON`,

      lootTable: [
        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.deepSavers.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_PYOCOMON`,
      baseDigimon: `PYOCOMON`,

      lootTable: [
        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.windGuardians.id,
          quantity: {
            min: 0,
            max: 3
          }
        },

        {
          type: 'core',
          coreType: 'family',
          coreName: DigimonFamilies.jungleTroopers.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    }
  ]
}
