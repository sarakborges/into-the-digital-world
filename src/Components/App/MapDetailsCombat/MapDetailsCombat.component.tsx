import { useContext } from 'react'
import { useNavigate } from 'react-router'

import { ProfileContext } from '@/Contexts/Profile.context'

import { getTexts } from '@/Texts'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

import { startBattleHelper } from '@/Helpers'

import { ROUTES } from '@/Routes/Routes'

import type { DigimonType } from '@/Types/Digimon.type'
import { MapTypes } from '@/Types/Map.type'

import { MapContext } from '@/Contexts/Map.context'

import { Typography } from '@/Components/System/Typography'
import { Portrait } from '@/Components/System/Portrait'
import { Button } from '@/Components/System/Button'

import { MapIcon } from '@/Components/App/MapIcon'

import './MapDetailsCombat.style.scss'

export const MapDetailsCombat = () => {
  const navigate = useNavigate()

  const mapContext = useContext(MapContext)
  const profileContext = useContext(ProfileContext)

  if (!mapContext || !profileContext) {
    return
  }

  const { currentMap } = mapContext
  const { profile } = profileContext

  const possibleEnemies = [
    ...(currentMap?.enemyDigimons ?? []),
    ...(currentMap?.eliteDigimons?.map((eliteItem) => ({
      ...eliteItem,
      isElite: true
    })) ?? [])
  ]

  if (!possibleEnemies?.length) {
    return
  }

  const startBattle = () => {
    if (!currentMap) {
      alert(getTexts('START_BATTLE_NO_MAP'))
      return
    }

    if (!profile?.party?.length) {
      alert(getTexts('START_BATTLE_NO_PARTY'))
      return
    }

    startBattleHelper({ currentMap, profile })
    navigate(ROUTES.BATTLE.path)
  }

  return (
    <>
      <section className="map-details-type">
        <main>
          {possibleEnemies
            .sort((a, b) => (a.baseDigimon > b.baseDigimon ? 1 : -1))
            .map((enemyItem) => (
              <div
                key={`map-details-${currentMap?.id}-combat-${enemyItem.id}`}
                className="map-details-combat"
              >
                <Portrait
                  src={`/digimon_portraits/${
                    ALL_DIGIMONS[enemyItem.baseDigimon]?.id
                  }.jpg`}
                  alt={`Enemy digimon: ${
                    ALL_DIGIMONS[enemyItem.baseDigimon]?.name
                  }`}
                />

                <Typography>
                  {[
                    enemyItem.isElite &&
                      getTexts('MAPS_DETAILS_COMBAT_ELITE_NAME'),
                    ALL_DIGIMONS[enemyItem.baseDigimon]?.name
                  ].join('')}
                </Typography>
              </div>
            ))}
        </main>
      </section>

      <footer className="map-details-enemies-actions">
        <Button onClick={startBattle}>
          <MapIcon mapType={MapTypes.COMBAT} sm />
          <Typography>{getTexts('MAPS_DETAILS_COMBAT_CTA')}</Typography>
        </Button>
      </footer>
    </>
  )
}
