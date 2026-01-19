import { useContext, useEffect, useState } from 'react'

import {
  InteractionsTypes,
  type InteractionType,
  type NpcType
} from '@/Types/Npc.type'
import { MapTypes } from '@/Types/Map.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'

import { ALL_QUESTS } from '@/GameData/Quests'
import { ALL_REGIONS } from '@/GameData/Regions'

import { NpcContext } from '@/Contexts/Npc.context'
import { ProfileContext } from '@/Contexts/Profile.context'

import { getTexts } from '@/Texts'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'

import { MapIcon } from '@/Components/App/MapIcon'

import './NpcDialog.style.scss'

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

        const progress = profile?.activeQuests?.find(
          (questItem) => questItem.questId === interaction.questId
        )?.progress

        return {
          ...interaction,
          questDetails: ALL_QUESTS[interaction.questId!],
          progress
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

  const abbandonQuest = (questId) => {
    if (
      !confirm(
        `Are you sure you want to abbandon this quest? Doing that, all progress will be deleted.`
      )
    ) {
      return
    }

    const newProfile = {
      ...profile,
      activeQuests: profile.activeQuests?.filter(
        (questItem) => questItem.questId !== questId
      )
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

                  <>
                    <Typography>
                      {profile.activeQuests?.some(
                        (questItem) =>
                          questItem.questId === currentInteraction.questId
                      )
                        ? currentInteraction.questDetails?.ongoingText
                        : currentInteraction.questDetails?.description}
                    </Typography>

                    <div className="quest-objectives">
                      <Typography as="span">Objectives:</Typography>

                      {currentInteraction.questDetails?.objectives.map(
                        (objectiveItem) => (
                          <Typography
                            key={`quest-${currentInteraction.id}-objective-${objectiveItem.id}`}
                            as="span"
                          >{`- ${
                            currentInteraction.progress?.find?.(
                              (progressItem) =>
                                progressItem.id === objectiveItem.id
                            )?.quantity || 0
                          } / ${objectiveItem.quantity} ${
                            objectiveItem.text
                          }`}</Typography>
                        )
                      )}
                    </div>

                    <div className="quest-rewards">
                      <Typography as="span">Rewards:</Typography>

                      {currentInteraction.questDetails?.rewards?.currency && (
                        <section>
                          <Typography as="span">
                            <>- Digital coins: </>
                            <>
                              {
                                currentInteraction.questDetails?.rewards
                                  ?.currency
                              }
                            </>
                          </Typography>
                        </section>
                      )}

                      {currentInteraction.questDetails?.rewards?.exp && (
                        <section>
                          <Typography as="span">
                            <>- Experience: </>
                            <>{currentInteraction.questDetails?.rewards?.exp}</>
                          </Typography>
                        </section>
                      )}

                      {currentInteraction.questDetails?.rewards?.cores && (
                        <>
                          {currentInteraction.questDetails?.rewards?.cores
                            ?.attribute && (
                            <>
                              {Object.keys(
                                currentInteraction.questDetails?.rewards?.cores
                                  ?.attribute
                              ).map((attributeItem) => (
                                <section>
                                  <Typography as="span">
                                    <>- </>

                                    <>
                                      {DigimonAttributes[attributeItem].value}
                                    </>

                                    <> cores: </>

                                    <>
                                      {
                                        currentInteraction.questDetails?.rewards
                                          ?.cores?.attribute?.[attributeItem]
                                      }
                                    </>
                                  </Typography>
                                </section>
                              ))}
                            </>
                          )}

                          {currentInteraction.questDetails?.rewards?.cores
                            ?.family && (
                            <>
                              {Object.keys(
                                currentInteraction.questDetails?.rewards?.cores
                                  ?.family
                              ).map((familyItem) => (
                                <section>
                                  <Typography as="span">
                                    <>- </>

                                    <>{DigimonFamilies[familyItem].name}</>

                                    <> cores: </>

                                    <>
                                      {
                                        currentInteraction.questDetails?.rewards
                                          ?.cores?.family?.[familyItem]
                                      }
                                    </>
                                  </Typography>
                                </section>
                              ))}
                            </>
                          )}
                        </>
                      )}

                      {currentInteraction.questDetails?.rewards?.newRegion && (
                        <section>
                          <Typography as="span">
                            <>- New region accessible: </>
                            <>
                              {
                                ALL_REGIONS[
                                  currentInteraction.questDetails?.rewards
                                    ?.newRegion
                                ].name
                              }
                            </>
                          </Typography>
                        </section>
                      )}
                    </div>

                    <div className="quest-buttons">
                      {!profile.activeQuests?.some(
                        (questItem) =>
                          questItem.questId === currentInteraction.questId
                      ) && (
                        <>
                          <Button
                            onClick={() =>
                              acceptQuest(currentInteraction.questId)
                            }
                          >
                            Accept quest
                          </Button>
                        </>
                      )}
                      !
                      {profile.activeQuests?.some(
                        (questItem) =>
                          questItem.questId === currentInteraction.questId
                      ) && (
                        <>
                          <Button
                            onClick={() =>
                              abbandonQuest(currentInteraction.questId)
                            }
                          >
                            Abbandon quest
                          </Button>
                        </>
                      )}
                    </div>
                  </>
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
