import { Portrait } from '@/Components/System/Portrait'

import { getTexts } from '@/Texts'

import { type DigimonType } from '@/Types/Digimon.type'
import { DigimonFamilies } from '@/Types/DigimonFamilies.type'
import { DigimonStages } from '@/Types/DigimonStages.type'
import { DigimonAttributes } from '@/Types/DigimonAttributes.type'

import { DIGIMON_STATS } from '@/Consts/DigimonStats.const'

import { Typography } from '@/Components/System/Typography'
import { Tag } from '@/Components/System/Tag'

import './StarterDigimonCard.style.scss'

export const StarterDigimonCard = ({ digimon }: { digimon: DigimonType }) => {
  return (
    <div className="starter-digimon-card">
      <Portrait
        src={`./digimons/${digimon.id}.jpg`}
        alt={`Starter digimon: ${digimon.name}`}
      />

      <section className="digimon-info">
        <Typography as="h2">{digimon.name}</Typography>

        <Typography as="span">
          <>{getTexts('DIGIMON_CARD_STAGE')}</>
          {DigimonStages[digimon.stage].value}
        </Typography>

        <section className="digimon-tags">
          <Tag className={`digimon-attribute-${digimon.attribute}`}>
            {DigimonAttributes[digimon.attribute].value}
          </Tag>

          {digimon.families.map((familyItem) => (
            <Tag
              key={`digimon-card-item-${digimon.id}-family-${familyItem}`}
              className={`digimon-family-${DigimonFamilies[
                familyItem
              ].toLocaleLowerCase()}`}
            >
              {DigimonFamilies[familyItem].name}
            </Tag>
          ))}
        </section>

        <section className="digimon-attributes">
          {Object.keys(DIGIMON_STATS).map((attributeItem) => (
            <div
              key={`digimon-card-item-${digimon.id}-attributes-${DIGIMON_STATS[attributeItem].id}`}
            >
              <Typography as="span">
                {DIGIMON_STATS[attributeItem].abbreviation}
              </Typography>

              {DIGIMON_STATS[attributeItem].icon}

              <Typography as="span">{digimon.stats[attributeItem]}</Typography>
            </div>
          ))}
        </section>
      </section>
    </div>
  )
}
