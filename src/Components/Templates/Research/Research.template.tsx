import { useContext } from 'react'

import { ALL_RECIPES } from '@/GameData/Recipes'
import { ALL_RESEARCHES } from '@/GameData/Researches'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'

import './Research.style.scss'
import { Button } from '@/Components/System/Button'
import { ALL_DIGIMONS } from '@/GameData/Digimons'
import { Portrait } from '@/Components/System/Portrait'

export const ResearchTemplate = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile, setProfile } = profileContext

  const researches = ALL_RESEARCHES.filter((researchItem) =>
    profile.researches.includes(researchItem.id)
  )
    .map((researchItem) => ({
      ...researchItem,
      recipe: ALL_RECIPES[researchItem.recipe]
    }))
    .sort((a, b) => (a.id > b.id ? 1 : -1))

  const doResearch = (id: string) => {
    const updatedProfile = {
      ...profile,
      recipes: [...(profile.recipes ?? []), id]
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
                <Portrait
                  src={`/digimon_portraits/${ALL_DIGIMONS[researchItem.recipe.digimon].id}.jpg`}
                  alt={`Party digimon: ${ALL_DIGIMONS[researchItem.recipe.digimon].name}`}
                  size="xs"
                />

                <Typography>
                  Compose recipe for{' '}
                  {ALL_DIGIMONS[researchItem.recipe.digimon].name}
                </Typography>

                <ul>
                  {researchItem.recipe.ingredients.map((ingredientItem) => (
                    <>
                      <Typography>{ingredientItem.id}</Typography>
                      <Typography>{ingredientItem.quantity}</Typography>
                    </>
                  ))}
                </ul>

                {!!profile.recipes.includes(researchItem.recipe.id) && (
                  <Button disabled>Already researched</Button>
                )}

                {!profile.recipes.includes(researchItem.recipe.id) && (
                  <Button onClick={() => doResearch(researchItem.recipe.id)}>
                    Research
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
