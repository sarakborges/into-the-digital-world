import { getTexts } from '@/Helpers/getTexts.helper'

import { useBattle } from '@/Hooks/Battle.hook'

import { Text } from '@/Components/System/Text'

import { BattleParty } from '@/Components/App/BattleParty'

import './Battlefield.style.scss'
import { getDialogs } from '@/Helpers/getDialogs.helper'

export const Battlefield = () => {
  const { battle } = useBattle()

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
      {!!(
        battle?.turnOrder.every((digimon) => digimon.party === 'allies') ||
        battle?.turnOrder.every((digimon) => digimon.party === 'enemies')
      ) && (
        <div className="combat-log">
          <Text>Combat log:</Text>

          {[...battle.combatLog.reverse()].map((logEntry, logIndex) => (
            <Text as="p">
              {getDialogs('BATTLE_LOG_TURN')
                .replaceAll('[TURN]', logIndex + 1)
                .replaceAll(
                  '[PARTY]',
                  logEntry.party === 'enemies'
                    ? getDialogs('BATTLE_ATTACK_ENEMIES')
                    : ''
                )
                .replaceAll('[NAME]', logEntry.attacker)
                .replaceAll('[TARGET]', logEntry.target)
                .replaceAll(
                  '[TARGETPARTY]',
                  logEntry.party === 'allies'
                    ? getDialogs('BATTLE_TARGET_ENEMIES')
                    : ''
                )
                .replaceAll('[DAMAGE]', logEntry.damage)}
            </Text>
          ))}
        </div>
      )}

      {!(
        battle?.turnOrder.every((digimon) => digimon.party === 'allies') ||
        battle?.turnOrder.every((digimon) => digimon.party === 'enemies')
      ) && (
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
