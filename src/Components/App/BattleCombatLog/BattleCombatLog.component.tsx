import { useContext } from 'react'
import { useNavigate } from 'react-router'

import { endBattleHelper } from '@/Helpers'

import { ALL_CORES } from '@/Consts/Cores.const'

import { ROUTES } from '@/Routes/Routes'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { BattleContext } from '@/Contexts/Battle.context'

import { Button } from '@/Components/System/Button'
import { Typography } from '@/Components/System/Typography'

import './BattleCombatLog.style.scss'

export const BattleCombatLog = () => {
  const battleContext = useContext(BattleContext)
  const profileContext = useContext(ProfileContext)

  if (!battleContext || !profileContext) {
    return
  }

  const navigate = useNavigate()

  const { battle } = battleContext
  const { digimons, isOver } = battle
  const { setProfile } = profileContext

  if (!battle) {
    return <></>
  }

  const { combatLog, loot } = battle

  const lootedCores = loot?.items?.map(
    (coreItem) =>
      coreItem.quantity > 0 &&
      `${coreItem.quantity || 0}x ${ALL_CORES[coreItem.id].abbreviation} cores`
  )

  const readableLoot = [
    loot?.exp ? `${loot?.exp} experience` : '',
    loot?.currency ? `${loot.currency}x Digital Coins` : '',
    ...(lootedCores ?? [])
  ].filter((lootItem) => !!lootItem)

  const endBattle = () => {
    setProfile((prevState) =>
      endBattleHelper({ profile: prevState, digimons, loot })
    )

    navigate(ROUTES.MAPS.path)
  }

  return (
    <aside className="battle-combat-log">
      {isOver && (
        <section className="combat-log-end">
          <Typography as="h2">{getTexts('BATTLE_END_TITLE')}</Typography>

          {!!readableLoot.length && (
            <div className="loot">
              <Typography>You and your party got:</Typography>

              {readableLoot.map((lootItem) => (
                <Typography key={`combat-log-entry-${lootItem}`}>
                  {lootItem}
                </Typography>
              ))}
            </div>
          )}

          <Button onClick={endBattle}>{getTexts('BATTLE_END')}</Button>
        </section>
      )}

      <main className="combat-log-card">
        <Typography as="h2">{getTexts('BATTLE_LOG_TITLE')}</Typography>

        <main className="combat-log-entries">
          {[...combatLog].reverse().map((logEntry, logKey) => (
            <div key={`combat-log-entry-${logKey}`} className={logEntry.party}>
              <Typography>{logEntry.text}</Typography>
            </div>
          ))}
        </main>
      </main>
    </aside>
  )
}
