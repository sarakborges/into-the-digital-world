import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { FaTimes } from 'react-icons/fa'

import { attackHelper, getDigimonName, endBattleHelper } from '@/Helpers'

import { ROUTES } from '@/Routes/Routes'

import { BattleContext } from '@/Contexts/Battle.context'
import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'

import { TurnOrder } from '@/Components/App/TurnOrder'
import { BattleParty } from '@/Components/App/BattleParty'

import './Battle.style.scss'

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

  const { currentDigimon, digimons, isOver, combatLog, winner } = battle

  const doAttack = () => {
    setBattle((prevState) => attackHelper({ battle: prevState }))
  }

  const endBattle = () => {
    setProfile((prevState) =>
      endBattleHelper({ profile: prevState, digimons, winner })
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
        {!isOver && <Typography as="h1">Battle encounter</Typography>}

        {isOver && (
          <Typography as="h1">
            <>The battle is over</>
            <> - </>
            <>{`${winner === 'player' ? 'Victory' : 'Defeat'}!`}</>
          </Typography>
        )}

        <TurnOrder />
      </header>

      <main className="battle-body">
        <main className="battle-main">
          <section className="battle-parties">
            <BattleParty
              party={digimons.filter((item) => item.party === 'player')}
              title={`Your party`}
            />

            <FaTimes />

            <BattleParty
              party={digimons.filter((item) => item.party === 'enemy')}
              title={`Enemy party`}
            />
          </section>
        </main>

        <aside className="battle-sidebar">
          {isOver && (
            <section className="battle-actions">
              <header className="actions-header">
                <Typography as="h2">Actions</Typography>
              </header>

              <main className="actions-buttons">
                <div>
                  <Button onClick={endBattle}>End battle</Button>
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
                      <>{getDigimonName(currentDigimon)}</>
                      <> actions</>
                    </Typography>
                  </header>

                  <main className="actions-buttons">
                    <div>
                      <Button onClick={doAttack}>Basic attack</Button>
                    </div>
                  </main>
                </section>
              )}
            </>
          )}

          <section className="battle-combat-log">
            <header className="combat-log-header">
              <Typography as="h2">Combat log</Typography>
            </header>

            <main className="combat-log-card">
              <main className="combat-log-entries">
                {combatLog.length < 1 && (
                  <div>
                    <Typography>Log is empty.</Typography>
                  </div>
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
