import { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router'

import { ProfileContext } from '@/Contexts/Profile.context'

import { getTexts } from '@/Texts'

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

  const enemyLevels = [
    ...new Set([
      currentMap?.enemyLevelRange?.min,
      currentMap?.enemyLevelRange?.max
    ])
  ].join(' - ')

  const eliteLevels = [
    ...new Set([
      currentMap?.eliteLevelRange?.min,
      currentMap?.eliteLevelRange?.max
    ])
  ].join(' - ')

  const possibleEnemies = [
    ...(currentMap?.enemyDigimons ?? []),
    ...(currentMap?.eliteDigimons?.map((eliteItem) => ({
      ...eliteItem,
      isElite: true
    })) ?? [])
  ]

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
      {!!possibleEnemies?.length && (
        <>
          <section className="map-details-type">
            <main>
              {possibleEnemies
                .sort((a, b) =>
                  (a.baseDigimon as DigimonType).id >
                  (b.baseDigimon as DigimonType).id
                    ? 1
                    : -1
                )
                .map((enemyItem) => (
                  <div
                    key={`map-details-${currentMap?.id}-combat-${enemyItem.id}`}
                    className="map-details-combat"
                  >
                    <Portrait
                      src={`/digimon_portraits/${
                        (enemyItem.baseDigimon as DigimonType).id
                      }.jpg`}
                      alt={`Enemy digimon: ${
                        (enemyItem.baseDigimon as DigimonType).name
                      }`}
                    />

                    <Typography>
                      {[
                        enemyItem.isElite &&
                          getTexts('MAPS_DETAILS_COMBAT_ELITE_NAME'),
                        (enemyItem.baseDigimon as DigimonType).name,
                        getTexts('MAPS_DETAILS_COMBAT_LEVEL').replace(
                          '[LEVEL]',
                          enemyItem.isElite ? eliteLevels : enemyLevels
                        )
                      ].join('')}
                    </Typography>
                  </div>
                ))}
            </main>
          </section>
        </>
      )}

      {possibleEnemies.length && (
        <footer className="map-details-enemies-actions">
          <Button onClick={startBattle}>
            <MapIcon mapType={MapTypes.COMBAT} sm />
            <Typography>{getTexts('MAPS_DETAILS_COMBAT_CTA')}</Typography>
          </Button>
        </footer>
      )}
    </>
  )
}
