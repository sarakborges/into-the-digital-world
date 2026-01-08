import { useContext } from 'react'

import { NpcContext } from '@/Contexts/Npc.context'

import { getTexts } from '@/Texts'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'

import { MapIcon } from '@/Components/App/MapIcon'

import './NpcDialog.style.scss'
import { Portrait } from '@/Components/System/Portrait'

export const NpcDialog = () => {
  const npcContext = useContext(NpcContext)

  if (!npcContext) {
    return
  }

  const { currentNpc, setCurrentNpc } = npcContext

  const closeDialog = () => {
    setCurrentNpc(undefined)
  }

  return (
    <>
      {!!currentNpc && (
        <div className="npc-dialog">
          <main className="npc-text">
            <header>
              <Typography as="h2">{currentNpc.name}</Typography>
            </header>

            <main className="npc-text-content">
              {!!currentNpc.welcomeText && (
                <Typography>{currentNpc.welcomeText}</Typography>
              )}

              {!currentNpc.welcomeText && (
                <Typography>
                  {currentNpc.name} is not in the mood for small talk.
                </Typography>
              )}
            </main>

            <div className="npc-actions">
              <Button onClick={closeDialog}>Leave</Button>
            </div>
          </main>

          <aside className="npc-picture">
            <Portrait
              src={`./npcs/${currentNpc.id}.jpg`}
              alt={`NPC ${currentNpc.name}`}
            />
          </aside>
        </div>
      )}
    </>
  )
}
