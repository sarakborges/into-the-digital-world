import { useContext, useEffect } from 'react'

import { attackHelper } from '@/Helpers'

import { getTexts } from '@/Texts'

import { DIGIMON_STATS } from '@/Consts/DigimonStats.const'

import { BattleContext } from '@/Contexts/Battle.context'

import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'
import { Typography } from '@/Components/System/Typography'

import { TurnOrder } from '@/Components/App/TurnOrder'
import { BattleParty } from '@/Components/App/BattleParty'
import { BattleCombatLog } from '@/Components/App/BattleCombatLog'
import { ResourceBar } from '@/Components/App/ResourceBar'

import './Battle.style.scss'

export const BattleTemplate = () => {
  const battleContext = useContext(BattleContext)

  if (!battleContext) {
    return
  }

  const { battle, setBattle } = battleContext

  if (!battle) {
    return <></>
  }

  const { digimons, isOver, currentDigimon } = battle

  const doAttack = () => {
    setBattle((prevState) => attackHelper({ battle: prevState }))
  }

  useEffect(() => {
    if (currentDigimon?.party === 'enemy') {
      doAttack()
    }
  }, [currentDigimon])

  return (
    <main className="battle-template">
      <main className="battle-body">
        <TurnOrder />

        <section className="battle-main">
          <section className="battle-parties">
            {['player', 'enemy'].map((item) => (
              <BattleParty
                key={`battle-parties-${item}`}
                type={item as 'player' | 'enemy'}
              />
            ))}
          </section>
        </section>

        <section className="battle-player-panel">
          <aside className="player-party">
            <Typography as="h2">Your party:</Typography>

            <ul>
              {digimons
                .filter((item) => item.party === 'player')
                .map((digimon) => (
                  <li
                    key={`player-panel-party-${digimon.id}`}
                    className={[
                      'card',
                      digimon.currentHp > 0 ? '' : 'defeated',
                      currentDigimon?.id === digimon.id && !isOver
                        ? 'active'
                        : ''
                    ]
                      .filter((item) => !!item)
                      .join(' ')}
                  >
                    <Portrait
                      src={`/digimon_portraits/${digimon!.baseDigimon.id}.jpg`}
                      alt={`Party digimon: ${digimon.name || digimon.baseDigimon.name}`}
                      size="sm"
                    />

                    <Typography>
                      {digimon.name || digimon.baseDigimon.name}
                    </Typography>

                    <ResourceBar
                      currentValue={digimon.currentHp}
                      maxValue={digimon.stats.hp}
                      type="hp"
                    />

                    <ResourceBar
                      currentValue={digimon.currentSp}
                      maxValue={digimon.stats.sp}
                      type="sp"
                    />
                  </li>
                ))}
            </ul>
          </aside>

          {currentDigimon?.party === 'player' && !isOver && (
            <section className="current-digimon card">
              <Portrait
                src={`/digimons/${currentDigimon!.baseDigimon.id}.jpg`}
                alt={`Current digimon: ${currentDigimon.name || currentDigimon.baseDigimon.name}`}
                size="lg"
              />

              <section className="current-digimon-info">
                <Typography as="h2">
                  {[
                    currentDigimon.name || currentDigimon.baseDigimon.name,
                    'turn!'
                  ].join("'s ")}
                </Typography>

                <div>
                  <Typography>HP: </Typography>

                  <ResourceBar
                    currentValue={currentDigimon.currentHp}
                    maxValue={currentDigimon.stats.hp}
                    type="hp"
                  />
                </div>

                <div>
                  <Typography>SP: </Typography>

                  <ResourceBar
                    currentValue={currentDigimon.currentSp}
                    maxValue={currentDigimon.stats.sp}
                    type="sp"
                  />
                </div>

                <section className="digimon-stats">
                  {Object.keys(DIGIMON_STATS)
                    .filter((statItem) => !['hp', 'sp'].includes(statItem))
                    .map((statItem) => (
                      <div
                        key={`digimon-card-item-${currentDigimon.id}-stats-${DIGIMON_STATS[statItem].id}`}
                      >
                        {DIGIMON_STATS[statItem].icon}

                        <Typography as="span">
                          {currentDigimon.stats[statItem]}
                        </Typography>
                      </div>
                    ))}
                </section>
              </section>

              <section className="battle-actions">
                <main className="actions-buttons">
                  <div>
                    {!isOver && (
                      <Button onClick={doAttack}>
                        {getTexts('BATTLE_ACTIONS_BASIC_ATTACK')}
                      </Button>
                    )}
                  </div>
                </main>
              </section>
            </section>
          )}
        </section>
      </main>

      <BattleCombatLog />
    </main>
  )
}
