import { getDigimon } from '@/GameData/Registries/Digimon.registry'
import { getDungeon } from '@/GameData/Registries/Dungeon.registry'

import { generateRandomNumber } from '@/Helpers/Math/generateRandomNumber.helper'
import { getSuccesses } from '@/Helpers/Math/getSuccesses.helper'
import { saveBattle } from '@/Helpers/Systems/Battle/saveBattle.helper'
import { spawnEnemies } from '@/Helpers/Systems/Battle/spawnEnemies.helper'

import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const startBattle = () => {
  const { profile } = useProfileStore.getState()
  const { dungeon } = useDungeonStore.getState()

  if (!profile || !dungeon) {
    return
  }

  const currentDungeon = getDungeon({
    zoneId: dungeon.zoneId,
    dungeonId: dungeon.dungeonId
  })

  const currentRoom =
    currentDungeon.possibleRooms[dungeon.rooms[dungeon.rooms.length - 1]]

  if (!currentRoom || !profile.party.length) {
    return
  }

  const spawnedEnemies = spawnEnemies()

  if (!spawnedEnemies) {
    return
  }

  const enemies = spawnedEnemies.map((digimon, digimonIndex) => ({
    ...getDigimon(digimon.digimonId),
    ...digimon,

    party: 'enemies' as 'allies' | 'enemies',
    index: digimonIndex,
    equipments: digimon.equipments
  }))

  saveBattle({
    combatLog: [],
    turnOrder: [...dungeon.party, ...enemies]
      .map((digimon) => ({
        ...digimon,
        initiative: getSuccesses(digimon.stats.agi)
      }))
      .sort((a, b) =>
        a.initiative !== b.initiative
          ? a.initiative > b.initiative
            ? 1
            : -1
          : generateRandomNumber({ min: -1, max: 1 })
      )
  })
}
