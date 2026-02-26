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

  const possibleEnemies = {
    wildDigimons: {
      id: `wildDigimons`,
      title: getTexts('MAPS_DETAILS_COMBAT_TITLE'),
      subTitle: getTexts('MAPS_DETAILS_COMBAT_SUBTITLE')
        .replace('[MIN]', currentMap?.enemyLevelRange?.min)
        .replace('[MAX]', currentMap?.enemyLevelRange?.max),
      icon: MapTypes.COMBAT,
      list: currentMap?.wildDigimons
    },

    eliteDigimons: {
      id: `eliteDigimons`,
      title: getTexts('MAPS_DETAILS_ELITE_TITLE'),
      subTitle: getTexts('MAPS_DETAILS_ELITE_SUBTITLE').replace(
        '[LEVEL]',
        currentMap?.eliteLevel
      ),
      icon: MapTypes.ELITE,
      list: currentMap?.eliteDigimons
    }
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
      {Object.values(possibleEnemies).map((enemyType) => (
        <Fragment key={`enemy-list-${enemyType.id}`}>
          {!!enemyType.list?.length && (
            <>
              <section className="map-details-type">
                <header>
                  <MapIcon mapType={enemyType.icon} sm />

                  <Typography as="span">
                    {[enemyType.title, enemyType.subTitle].join(' ')}
                  </Typography>
                </header>

                <main>
                  {enemyType.list
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
                          {(enemyItem.baseDigimon as DigimonType).name}
                        </Typography>
                      </div>
                    ))}
                </main>
              </section>
            </>
          )}
        </Fragment>
      ))}

      {(possibleEnemies.wildDigimons.list?.length ||
        possibleEnemies.eliteDigimons.list?.length) && (
        <footer>
          <Button onClick={startBattle}>
            {getTexts('MAPS_DETAILS_COMBAT_CTA')}
          </Button>
        </footer>
      )}
    </>
  )
}
