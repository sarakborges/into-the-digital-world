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

export const ResearchTemplate = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile, setProfile } = profileContext

  const researches = Object.values(ALL_DIGIMONS)
    .filter(
      (digimonItem) =>
        profile.researches.includes(digimonItem.id) &&
        !!digimonItem.compositionTemplate
    )
    .sort((a, b) => (a.id > b.id ? 1 : -1))

  const doResearch = (id: string) => {
    const updatedProfile = {
      ...profile,
      templates: [...new Set([...(profile.templates ?? []), id])],
      researches: [...new Set([...(profile.researches ?? []), id])]
    }

    localStorage.setItem('profile', JSON.stringify(updatedProfile))
    setProfile(updatedProfile)
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
