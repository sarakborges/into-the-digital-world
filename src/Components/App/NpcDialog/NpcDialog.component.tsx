import { useContext, useEffect, useState } from 'react'

import { MapTypes } from '@/Types/Map.type'

import { NpcContext } from '@/Contexts/Npc.context'

import { getTexts } from '@/Texts'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'

import { MapIcon } from '@/Components/App/MapIcon'

import './NpcDialog.style.scss'
import { ALL_QUESTS } from '@/GameData/Quests'
import {
  InteractionsTypes,
  type InteractionType,
  type NpcType
} from '@/Types/Npc.type'
import { ProfileContext } from '@/Contexts/Profile.context'

export const NpcDialog = () => {
  const profileContext = useContext(ProfileContext)
  const npcContext = useContext(NpcContext)

  if (!npcContext || !profileContext) {
    return
  }

  const { currentNpc, setCurrentNpc } = npcContext
  const { profile, setProfile } = profileContext

  const [npcInfo, setNpcInfo] = useState<NpcType>()
  const [currentInteraction, setCurrentInteraction] =
    useState<InteractionType>()

  const openInteraction = (interaction) => {
    setCurrentInteraction(interaction)
  }

  const closeInteraction = () => {
    setCurrentInteraction(undefined)
  }

  const closeDialog = () => {
    setCurrentNpc(undefined)
    setCurrentInteraction(undefined)
  }

  const enrichInteractions = (interactions: InteractionType[]) => {
    return interactions
      .map((interaction) => {
        if (interaction.type !== InteractionsTypes.QUEST) {
          return interaction
        }

        return {
          ...interaction,
          questDetails: ALL_QUESTS[interaction.questId!]
        }
      })
      .filter((interaction) => {
        if (interaction.type !== InteractionsTypes.QUEST) {
          return true
        }

        return !profile.completedQuests?.includes(interaction.questId!)
      })
  }

  const acceptQuest = (questId) => {
    const newProfile = {
      ...profile,
      activeQuests: profile.activeQuests
        ? [...profile.activeQuests, { questId }]
        : [{ questId }]
    }

    setProfile(newProfile)
    localStorage.setItem('profile', JSON.stringify(newProfile))

    closeInteraction()
  }

  useEffect(() => {
    if (!currentNpc) {
      return
    }

    setNpcInfo({
      ...currentNpc,
      interactions: enrichInteractions(currentNpc.interactions)
    })
  }, [currentNpc])

  return (
    <>
      {!!currentNpc && (
        <div className="npc-dialog">
          <main className="npc-text">
            <main className="npc-text-content">
              {!currentInteraction && (
                <>
                  <Typography>
                    {npcInfo?.welcomeText ||
                      `${npcInfo?.name} is not in the mood for small talk.`}
                  </Typography>

                  {npcInfo?.interactions.map((interactionItem) => (
                    <div
                      key={`npc-${npcInfo.id}-interaction-${interactionItem.id}`}
                      className="npc-interaction"
                    >
                      <Button onClick={() => openInteraction(interactionItem)}>
                        <MapIcon mapType={MapTypes[interactionItem.type]} sm />

                        <Typography>
                          {interactionItem.questDetails?.name}
                        </Typography>
                      </Button>
                    </div>
                  ))}
                </>
              )}

              {currentInteraction?.type === InteractionsTypes.QUEST && (
                <article className="quest-description">
                  <Typography as="h2">
                    {currentInteraction.questDetails?.name}
                  </Typography>

                  {!profile.activeQuests?.some(
                    (questItem) =>
                      questItem.questId === currentInteraction.questId
                  ) && (
                    <>
                      <Typography>
                        {currentInteraction.questDetails?.description}
                      </Typography>

                      <div className="accept-quest">
                        <Button
                          onClick={() =>
                            acceptQuest(currentInteraction.questId)
                          }
                        >
                          Accept quest
                        </Button>
                      </div>
                    </>
                  )}

                  {profile.activeQuests?.some(
                    (questItem) =>
                      questItem.questId === currentInteraction.questId
                  ) && (
                    <Typography>
                      {currentInteraction.questDetails?.ongoingText}
                    </Typography>
                  )}
                </article>
              )}
            </main>

            <div className="npc-actions">
              {!!currentInteraction && (
                <Button onClick={closeInteraction}>Return</Button>
              )}

              <Button onClick={closeDialog}>Leave</Button>
            </div>
          </main>

          <aside className="npc-picture">
            <header>
              <Typography as="h2">{currentNpc.name}</Typography>
            </header>

            <Portrait
              src={`./npcs/${npcInfo?.id}.jpg`}
              alt={`NPC ${npcInfo?.name}`}
            />
          </aside>
        </div>
      )}
    </>
  )
}
