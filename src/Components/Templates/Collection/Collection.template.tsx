import { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'

import { getTexts } from '@/Texts'

import { DIGIMON_FAMILIES } from '@/Consts/DigimonFamilies.const'
import { DIGIMON_ATTRIBUTES } from '@/Consts/DigimonAttributes.const'
import { DIGIMON_STATS } from '@/Consts/DigimonStats.const'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

import { ProfileContext } from '@/Contexts/Profile.context'
import { CollectionContext } from '@/Contexts/Collection.context'

import { Typography } from '@/Components/System/Typography'
import { Icon } from '@/Components/System/Icon'
import { Button } from '@/Components/System/Button'
import { FullPicture } from '@/Components/System/FullPicture'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { PartnerDigimonCard } from '@/Components/App/PartnerDigimonCard'

import './Collection.style.scss'

export const CollectionTemplate = () => {
  const profileContext = useContext(ProfileContext)
  const collectionContext = useContext(CollectionContext)

  if (!profileContext || !collectionContext) {
    return
  }

  const { profile } = profileContext
  const { digimonDetails, setDigimonDetails } = collectionContext

  const digimonsInParty = profile.party?.map((partyItem) => {
    return profile.partners?.find((digimonItem) => digimonItem.id === partyItem)
  })

  const digimonsNotInParty = profile.partners?.filter(
    (partyItem) => !profile.party?.includes(partyItem.id)
  )

  return (
    <MenuWrapper>
      <main className="collection-template">
        {!!digimonDetails && (
          <main className="digimon-details card">
            <div className="details-body">
              <main>
                <aside className="digimon-picture">
                  <FullPicture
                    src={`/digimons/${ALL_DIGIMONS[digimonDetails.baseDigimon].id}.jpg`}
                    alt={`${ALL_DIGIMONS[digimonDetails.baseDigimon].name} details`}
                  />
                </aside>

                <main className="digimon-info">
                  <section className="digimon-name">
                    <Typography as="h2">
                      {digimonDetails.name && <>{digimonDetails.name}, the </>}

                      <>{ALL_DIGIMONS[digimonDetails.baseDigimon].name}</>
                    </Typography>

                    <Button onClick={() => setDigimonDetails(undefined)}>
                      <FaTimes />
                    </Button>
                  </section>

                  <section className="digimon-attribute-families-moves">
                    <section className="digimon-attribute-families">
                      <section className="digimon-attribute">
                        <Typography as="span">Attribute:</Typography>

                        <div className="attribute-item">
                          <Icon
                            src={`/cores/${
                              DIGIMON_ATTRIBUTES[
                                ALL_DIGIMONS[digimonDetails.baseDigimon]
                                  .attribute
                              ].icon
                            }.jpg`}
                            alt={`${ALL_DIGIMONS[digimonDetails.baseDigimon].name} attribute`}
                          />

                          <Typography as="span">
                            {
                              DIGIMON_ATTRIBUTES[
                                ALL_DIGIMONS[digimonDetails.baseDigimon]
                                  .attribute
                              ].name
                            }
                          </Typography>
                        </div>
                      </section>

                      <section className="digimon-families">
                        <Typography as="span">Families:</Typography>

                        {ALL_DIGIMONS[digimonDetails.baseDigimon].families.map(
                          (familyItem) => (
                            <div className="family-item">
                              <Icon
                                src={`/cores/${
                                  DIGIMON_FAMILIES[familyItem].icon
                                }.jpg`}
                                alt={`${ALL_DIGIMONS[digimonDetails.baseDigimon].name} family`}
                              />

                              <Typography as="span">
                                {DIGIMON_FAMILIES[familyItem].name}
                              </Typography>
                            </div>
                          )
                        )}
                      </section>
                    </section>

                    {!!ALL_DIGIMONS[digimonDetails.baseDigimon]
                      .specialMoves && (
                      <section className="digimon-moves">
                        <Typography as="span">Special Moves:</Typography>

                        {(
                          Object.values(
                            ALL_DIGIMONS[digimonDetails.baseDigimon]
                              .specialMoves
                          ) as Array<{ id: string; name: string }>
                        ).map((moveItem) => (
                          <div className="move-item">
                            <Typography as="span">{moveItem.name}</Typography>
                          </div>
                        ))}
                      </section>
                    )}
                  </section>

                  <section className="digimon-stats">
                    <Typography as="span">Stats:</Typography>

                    <ul>
                      {Object.keys(DIGIMON_STATS).map((statItem) => (
                        <li
                          key={`digimon-details-${digimonDetails.id}-stats-${DIGIMON_STATS[statItem].id}`}
                        >
                          {DIGIMON_STATS[statItem].icon}

                          <Typography as="span">
                            {DIGIMON_STATS[
                              statItem
                            ].abbreviation.toLocaleUpperCase()}
                            :
                          </Typography>

                          <Typography as="span">
                            <>
                              {
                                ALL_DIGIMONS[digimonDetails.baseDigimon].stats[
                                  statItem
                                ]
                              }
                            </>
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </section>
                </main>
              </main>
            </div>
          </main>
        )}

        <section>
          <header className="collection-header">
            <Typography as="h1">{getTexts('COLLECTION_TITLE')}</Typography>
            <Typography as="h2">{getTexts('COLLECTION_SUBTITLE')}</Typography>
          </header>

          <section className="collection-list">
            <header>
              <Typography as="h2">
                {getTexts('COLLECTION_PARTY_TITLE')}
              </Typography>
            </header>

            {!!digimonsInParty?.length && (
              <main className="partners-list">
                {digimonsInParty?.map((partyItem) => (
                  <PartnerDigimonCard
                    key={`partner-list-item-${partyItem?.id}`}
                    digimonItem={partyItem!}
                  />
                ))}
              </main>
            )}
          </section>

          {!!digimonsNotInParty?.length && (
            <section className="collection-list">
              <header>
                <Typography as="h2">
                  {getTexts('COLLECTION_ALL_TITLE')}
                </Typography>
              </header>

              <main className="partners-list">
                {digimonsNotInParty?.map((partyItem) => (
                  <PartnerDigimonCard
                    key={`partner-list-item-${partyItem?.id}`}
                    digimonItem={partyItem!}
                  />
                ))}
              </main>
            </section>
          )}
        </section>
      </main>
    </MenuWrapper>
  )
}
