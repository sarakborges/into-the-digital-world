import { useContext } from 'react'

import { ALL_RECIPES } from '@/GameData/Recipes'
import { ALL_RESEARCHES } from '@/GameData/Researches'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'

import './Research.style.scss'

export const ResearchTemplate = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile } = profileContext

  const researches = ALL_RESEARCHES.filter(
    (researchItem) =>
      profile.researches.includes(researchItem.id) &&
      !profile.recipes.includes(researchItem.recipe)
  ).map((researchItem) => ({
    ...researchItem,
    recipe: ALL_RECIPES[researchItem.recipe]
  }))

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
                <Typography>{researchItem.id}</Typography>
                <Typography>{researchItem.cost}</Typography>
              </li>
            ))}
          </ul>
        </main>
      </main>
    </MenuWrapper>
  )
}
