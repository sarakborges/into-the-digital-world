import { getTexts } from '@/Helpers/getTexts.helper'

import { useBattle } from '@/Hooks/Battle.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { BattleParty } from '@/Components/App/BattleParty'

import './Battlefield.style.scss'
import { AllItems } from '@/GameData/Items'
import { Portrait } from '@/Components/System/Portrait'

export const Battlefield = () => {
  const { battle } = useBattle()
  const { scene } = useScene()

  if (!battle) {
    return
  }

  const parties: {
    [partySide: string]: string
  } = {
    allies: getTexts('BATTLE_PARTY_ALLIES'),
    enemies: getTexts('BATTLE_PARTY_ENEMIES')
  }

  return (
    <div className="battlefield">
      {scene?.currentStage === 'end' && (
        <div className="combat-log">
          <Text>{getTexts('BATTLE_LOG_TITLE')}</Text>

          {[...battle.combatLog.reverse()].map((logEntry, logIndex) => (
            <div className="log-entry">
              <Text as="p">
                {getTexts('BATTLE_LOG_TURN')
                  .replaceAll('[TURN]', logIndex + 1)
                  .replaceAll(
                    '[PARTY]',
                    logEntry.party === 'enemies'
                      ? getTexts('BATTLE_ATTACK_ENEMIES')
                      : ''
                  )
                  .replaceAll('[NAME]', logEntry.attacker)
                  .replaceAll('[TARGET]', logEntry.target)
                  .replaceAll(
                    '[TARGETPARTY]',
                    logEntry.party === 'allies'
                      ? getTexts('BATTLE_TARGET_ENEMIES')
                      : ''
                  )
                  .replaceAll('[DAMAGE]', logEntry.damage)}
              </Text>
            </div>
          ))}
        </div>
      )}

      {scene?.currentStage === 'epilogue' && (
        <div className="loot">
          <Text>Loot:</Text>

          {Object.keys(battle.loot!).map((item) => (
            <div className="loot-item">
              {AllItems[item].category === 'core' && (
                <div className="core-item">
                  <Portrait alt="Core border" src={`/items/chip.png`} />

                  <Portrait
                    alt={AllItems[item].name}
                    src={`/${AllItems[item].portrait}.webp`}
                  />
                </div>
              )}

              <Text as="p">
                {`${AllItems[item].name} x${battle.loot![item].amount}`}
              </Text>
            </div>
          ))}
        </div>
      )}

      {scene?.currentStage !== 'end' && scene?.currentStage !== 'epilogue' && (
        <div className="digimon-parties">
          {Object.keys(parties).map((party) => (
            <div key={`party-${party}`}>
              <header>
                <Text>{parties[party]}</Text>
              </header>

              <main>
                <BattleParty
                  party={{
                    title: parties[party],
                    list: battle[party]
                  }}
                />
              </main>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
