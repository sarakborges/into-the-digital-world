import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

import { ALL_CORES } from '@/Consts/Cores.const'

import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'
import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'
import { Icon } from '@/Components/System/Icon'

import { MenuWrapper } from '@/Components/App/MenuWrapper'

import './Research.style.scss'
import { randomNumber } from '@/Helpers'

export const ResearchTemplate = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile, setProfile } = profileContext

  const researches = Object.values(ALL_DIGIMONS)
    .filter((researchItem) => profile.researches.includes(researchItem.id))
    .sort((a, b) => (a.id > b.id ? 1 : -1))

  const availableResearches = Object.values(ALL_DIGIMONS).filter(
    (researchItem) =>
      !!researchItem.compositionTemplate &&
      !profile.templates.includes(researchItem.id)
  )

  const doResearch = (id: string) => {
    const updatedProfile = {
      ...profile,
      templates: [...(profile.templates ?? []), id]
    }

    localStorage.setItem('profile', JSON.stringify(updatedProfile))
    setProfile(updatedProfile)
  }

  const getRandomResearch = () => {
    const rng =
      availableResearches.length > 1
        ? randomNumber({
            min: 0,
            max: availableResearches.length - 1
          })
        : 0

    return availableResearches[rng].id
  }

  return (
    <MenuWrapper>
      <main className="research-template">
        <header className="research-header">
          <Typography as="h1">{getTexts('RESEARCH_TITLE')}</Typography>
          <Typography as="h2">{getTexts('RESEARCH_SUBTITLE')}</Typography>
        </header>

        <main className="researches-list">
          <ul>
            <li>
              <header>
                <Typography>
                  Research the template of a random Digimon
                </Typography>
              </header>

              {!availableResearches?.length && (
                <Button disabled>No researches available</Button>
              )}

              {!!availableResearches?.length && (
                <Button onClick={() => doResearch(getRandomResearch())}>
                  Research for 10000 Digital Coins
                </Button>
              )}
            </li>

            {researches.map((researchItem) => (
              <li key={`researches-list-${researchItem.id}`}>
                <header>
                  <Portrait
                    src={`/digimon_portraits/${researchItem.id}.jpg`}
                    alt={`Research: ${researchItem.name} template`}
                    size="xs"
                  />

                  <Typography>
                    Compose template for
                    <br />
                    {researchItem.name}
                  </Typography>
                </header>

                <ul>
                  {researchItem.compositionTemplate?.data.map((dataItem) => (
                    <li
                      key={`researches-list-${researchItem.id}-data-${dataItem.id}`}
                    >
                      <Icon
                        src={
                          !!ALL_DIGIMONS[dataItem.id]
                            ? `/digimon_portraits/${dataItem.id}.jpg`
                            : `/cores/${ALL_CORES[dataItem.id].icon}.jpg`
                        }
                        alt={`Research ${researchItem.name} template data`}
                      />
                    </li>
                  ))}
                </ul>

                {!!profile.templates.includes(researchItem.id) && (
                  <Button disabled>Already researched</Button>
                )}

                {!profile.templates.includes(researchItem.id) && (
                  <Button onClick={() => doResearch(researchItem.id)}>
                    Research for {researchItem.researchCost} Digital Coins
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </main>
      </main>
    </MenuWrapper>
  )
}
