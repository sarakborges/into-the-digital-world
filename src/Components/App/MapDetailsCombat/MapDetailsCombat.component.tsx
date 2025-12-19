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

  const startBattle = () => {
    if (!currentMap) {
      return
    }

    startBattleHelper({ currentMap, profile })
    navigate(ROUTES.BATTLE.path)
  }

  return (
    <>
      {!!currentMap &&
        currentMap.type.includes(MapTypes.COMBAT) &&
        !!currentMap.wildDigimons?.length && (
          <section className="map-details-type">
            <header>
              <MapIcon mapType={MapTypes.COMBAT} sm />

              <Typography as="span">
                {getTexts('MAPS_DETAILS_COMBAT_TITLE')}

                <> (</>
                <>Level range: </>
                <>{currentMap.enemyLevelRange?.min}</>
                <> - </>
                <>{currentMap.enemyLevelRange?.max}</>
                <>)</>
              </Typography>
            </header>

            <main>
              {currentMap.wildDigimons
                .sort((a, b) =>
                  (a.baseDigimon as DigimonType).id >
                  (b.baseDigimon as DigimonType).id
                    ? 1
                    : -1
                )
                .map((wildDigimonItem) => (
                  <Typography
                    key={`map-details-${currentMap.id}-wild-digimon-${wildDigimonItem.id}`}
                  >
                    <>
                      {profile.seenDigimon?.includes(
                        (wildDigimonItem.baseDigimon as DigimonType).id
                      )
                        ? (wildDigimonItem.baseDigimon as DigimonType).name
                        : `???`}
                    </>
                  </Typography>
                ))}
            </main>

            <footer>
              <Button onClick={startBattle}>
                {getTexts('MAPS_DETAILS_COMBAT_CTA')}
              </Button>
            </footer>
          </section>
        )}
    </>
  )
}
