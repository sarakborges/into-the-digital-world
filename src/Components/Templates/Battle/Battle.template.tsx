import { Fragment, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { FaTimes } from 'react-icons/fa'

import { attackHelper, getDigimonName, endBattleHelper } from '@/Helpers'

import { getTexts } from '@/Texts'

import { ROUTES } from '@/Routes/Routes'

import { BattleContext } from '@/Contexts/Battle.context'
import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'

import { TurnOrder } from '@/Components/App/TurnOrder'
import { BattleParty } from '@/Components/App/BattleParty'

import './Battle.style.scss'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'

export const BattleTemplate = () => {
  const navigate = useNavigate()

  const battleContext = useContext(BattleContext)
  const profileContext = useContext(ProfileContext)

  if (!battleContext || !profileContext) {
    return
  }

  const { battle, setBattle } = battleContext
  const { setProfile } = profileContext

  if (!battle) {
    return <></>
  }

  const { currentDigimon, digimons, isOver, combatLog, winner, loot } = battle

  const doAttack = () => {
    setBattle((prevState) => attackHelper({ battle: prevState }))
  }

  const endBattle = () => {
    setBattle({ combatLog: [], digimons: [], turnOrder: [] })

    setProfile((prevState) =>
      endBattleHelper({ profile: prevState, digimons, loot })
    )

    navigate(ROUTES.MAPS.path)
  }

  useEffect(() => {
    if (battle.currentDigimon?.party === 'enemy') {
      doAttack()
    }
  }, [battle.currentDigimon])

  return (
    <main className="battle-template">
      <header className="battle-header">
        {!isOver && <Typography as="h1">{getTexts('BATTLE_TITLE')}</Typography>}

        {isOver && (
          <Typography as="h1">
            {getTexts(`BATTLE_OVER`).replace(
              ':decision',
              getTexts(winner === 'player' ? 'BATTLE_VICTORY' : 'BATTLE_DEFEAT')
            )}
          </Typography>
        )}

        <TurnOrder />
      </header>

      <main className="battle-body">
        <main className="battle-main">
          <section className="battle-parties">
            <BattleParty
              party={digimons.filter((item) => item.party === 'player')}
              title={getTexts('BATTLE_PLAYER_PARTY')}
            />

            <FaTimes />

            <BattleParty
              party={digimons.filter((item) => item.party === 'enemy')}
              title={getTexts('BATTLE_ENEMY_PARTY')}
            />
          </section>
        </main>

        <aside className="battle-sidebar">
          {isOver && (
            <section className="battle-actions">
              <header className="actions-header">
                <Typography as="h2">
                  {getTexts('BATTLE_ACTIONS_TITLE')}
                </Typography>
              </header>

              <main className="actions-buttons">
                <div>
                  <Button onClick={endBattle}>{getTexts('BATTLE_END')}</Button>
                </div>
              </main>
            </section>
          )}

          {!isOver && (
            <>
              {currentDigimon?.party === 'player' && (
                <section className="battle-actions">
                  <header className="actions-header">
                    <Typography as="h2">
                      <>
                        {getTexts('BATTLE_DIGIMON_ACTIONS').replace(
                          ':digimon',
                          getDigimonName(currentDigimon)
                        )}
                      </>
                    </Typography>
                  </header>

                  <main className="actions-buttons">
                    <div>
                      <Button onClick={doAttack}>
                        {getTexts('BATTLE_ACTIONS_BASIC_ATTACK')}
                      </Button>
                    </div>
                  </main>
                </section>
              )}
            </>
          )}

          <section className="battle-combat-log">
            <header className="combat-log-header">
              <Typography as="h2">{getTexts('BATTLE_LOG_TITLE')}</Typography>
            </header>

            <main className="combat-log-card">
              <main className="combat-log-entries">
                {combatLog.length < 1 && (
                  <div>
                    <Typography>{getTexts('BATTLE_LOG_EMPTY')}</Typography>
                  </div>
                )}

                {!!loot?.exp && (
                  <div className="loot">
                    <Typography>
                      <>You and your party got </>
                      <>{loot.exp} </>
                      <>experience.</>
                    </Typography>
                  </div>
                )}

                {!!loot?.currency && (
                  <div className="loot">
                    <Typography>
                      <>You got </>
                      <>{loot.currency} </>
                      <>digital coins.</>
                    </Typography>
                  </div>
                )}

                {!!loot?.cores && (
                  <>
                    {Object.keys(loot.cores)?.map((coreType) => (
                      <Fragment key={`combat-log-entry-loot-${coreType}`}>
                        {Object.keys(loot.cores[coreType])?.map((coreItem) => (
                          <Fragment
                            key={`combat-log-entry-loot-${coreType}-${coreItem}`}
                          >
                            {loot.cores[coreType][coreItem] > 0 && (
                              <div className="loot">
                                <Typography>
                                  <>You got </>
                                  <>{loot.cores[coreType][coreItem]} </>

                                  {coreType === 'family' && (
                                    <>{DigimonFamilies[coreItem].name}</>
                                  )}

                                  {coreType === 'attribute' && (
                                    <>{DigimonAttributes[coreItem].name}</>
                                  )}

                                  <> cores.</>
                                </Typography>
                              </div>
                            )}
                          </Fragment>
                        ))}
                      </Fragment>
                    ))}
                  </>
                )}

                {combatLog.length > 0 && (
                  <>
                    {[...combatLog].reverse().map((logEntry, logKey) => (
                      <div
                        key={`combat-log-entry-${logKey}`}
                        className={logEntry.party}
                      >
                        <Typography>{logEntry.text}</Typography>
                      </div>
                    ))}
                  </>
                )}
              </main>
            </main>
          </section>
        </aside>
      </main>
    </main>
  )
}
