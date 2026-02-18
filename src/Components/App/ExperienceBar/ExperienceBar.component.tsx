import { getTexts } from '@/Texts'

import { Typography } from '@/Components/System/Typography'

import { ResourceBar } from '@/Components/App/ResourceBar'

import './ExperienceBar.style.scss'

export const ExperienceBar = ({
  currentExp,
  nextLevelExp
}: {
  currentExp: number
  nextLevelExp: number
}) => {
  return (
    <section className="experience-bar">
      <Typography as="span">{getTexts('NEXT_LEVEL_TEXT')}</Typography>
      <ResourceBar currentValue={currentExp} maxValue={nextLevelExp} />
    </section>
  )
}
