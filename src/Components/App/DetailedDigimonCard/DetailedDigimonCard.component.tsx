import { Portrait } from '@/Components/System/Portrait'

import { type DigimonType } from '@/Types/Digimon.type'

import { DIGIMON_ATTRIBUTES } from '@/Consts/DigimonAttributes.const'
import { DIGIMON_FAMILIES } from '@/Consts/DigimonFamilies.const'
import { DIGIMON_STATS } from '@/Consts/DigimonStats.const'

import { Typography } from '@/Components/System/Typography'
import { Tag } from '@/Components/System/Tag'

import './DetailedDigimonCard.style.scss'
import { Icon } from '@/Components/System/Icon'

export const DetailedDigimonCard = ({ digimon }: { digimon: DigimonType }) => {
  return (
    <div className="detailed-digimon-card">
      <Portrait
        src={`/digimon_portraits/${digimon.id}.jpg`}
        alt={`Starter digimon: ${digimon.name}`}
      />

      <section className="digimon-info">
        <Typography as="h2">{digimon.name}</Typography>

        <section className="digimon-tags">
          <Tag>
            <Icon
              alt={`Digimon attribute ${DIGIMON_ATTRIBUTES[digimon.attribute].name}`}
              src={`/cores/${DIGIMON_ATTRIBUTES[digimon.attribute].icon}.jpg`}
            />

            <Typography>
              {DIGIMON_ATTRIBUTES[digimon.attribute].name}
            </Typography>
          </Tag>

          {digimon.families.map((familyItem) => (
            <Tag key={`digimon-card-item-${digimon.id}-family-${familyItem}`}>
              <Icon
                alt={`Digimon family ${DIGIMON_FAMILIES[familyItem].name}`}
                src={`/cores/${DIGIMON_FAMILIES[familyItem].icon}.jpg`}
              />

              <Typography>{DIGIMON_FAMILIES[familyItem].name}</Typography>
            </Tag>
          ))}
        </section>

        <section className="digimon-stats">
          {Object.keys(DIGIMON_STATS).map((statItem) => (
            <div
              key={`digimon-card-item-${digimon.id}-stats-${DIGIMON_STATS[statItem].id}`}
            >
              {DIGIMON_STATS[statItem].icon}

              <Typography as="span">
                {DIGIMON_STATS[statItem].abbreviation}:
              </Typography>

              <Typography as="span">{digimon.stats[statItem]}</Typography>
            </div>
          ))}
        </section>
      </section>
    </div>
  )
}
