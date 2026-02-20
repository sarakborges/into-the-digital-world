import { useContext } from 'react'
import { useNavigate } from 'react-router'

import { getTexts } from '@/Texts'

import { ROUTES } from '@/Routes/Routes'

import type { DigimonType } from '@/Types/Digimon.type'
import { MapTypes } from '@/Types/Map.type'

import { startBattleHelper } from '@/Helpers'

import { MapContext } from '@/Contexts/Map.context'
import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'

import { MapIcon } from '@/Components/App/MapIcon'

import './MapDetailsBoss.style.scss'

export const MapDetailsBoss = () => {
  const navigate = useNavigate()

  const mapContext = useContext(MapContext)
  const profileContext = useContext(ProfileContext)

  if (!mapContext || !profileContext) {
    return
  }

  const { currentMap } = mapContext
  const { profile } = profileContext

  const startBattle = () => {
    if (!currentMap) {
      return
    }

    startBattleHelper({ currentMap, profile, isBoss: true })
    navigate(ROUTES.BATTLE.path)
  }

  return (
    <>
      {!!currentMap &&
        currentMap.types.includes(MapTypes.BOSS) &&
        !!currentMap.wildDigimons?.length && (
          <section className="map-details-type">
            <header>
              <MapIcon mapType={MapTypes.BOSS} sm />

              <Typography as="span">
                {getTexts('MAPS_DETAILS_BOSS_TITLE')}
              </Typography>
            </header>

            <main>
              {currentMap.wildDigimons.map((wildDigimonItem) => (
                <div
                  key={`map-details-${currentMap.id}-boss-${wildDigimonItem.id}`}
                  className="map-details-boss"
                >
                  <Portrait
                    src={`/digimon_portraits/${
                      (wildDigimonItem.baseDigimon as DigimonType).id
                    }.jpg`}
                    alt={`Boss digimon: ${
                      (wildDigimonItem.baseDigimon as DigimonType).name
                    }`}
                  />

                  <Typography>
                    <>{(wildDigimonItem.baseDigimon as DigimonType).name}</>

                    <>{getTexts('MAPS_DETAILS_COMBAT_WILD_LEVEL')}</>
                    <>{currentMap.bossLevel}</>
                  </Typography>
                </div>
              ))}
            </main>

            <footer>
              <Button onClick={startBattle}>
                {getTexts('MAPS_DETAILS_BOSS_CTA')}
              </Button>
            </footer>
          </section>
        )}
    </>
  )
}
