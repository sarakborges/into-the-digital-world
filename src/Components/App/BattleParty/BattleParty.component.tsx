import type { PartyDigimon } from '@/Types/Digimon.type'

import { Typography } from '@/Components/System/Typography'

import { BattlePartyDigimonCard } from '@/Components/App/BattlePartyDigimonCard'

import './BattleParty.style.scss'

export const BattleParty = ({
  party,
  title
}: {
  party: Array<PartyDigimon>
  title: string
}) => {
  return (
    <div className="battle-party">
      <Typography as="h2">{title}</Typography>

      <main className="battle-party-list">
        {party.map((partyItem) => (
          <BattlePartyDigimonCard
            key={`battle-enemy-party-digimon-${partyItem.id}`}
            partyItem={partyItem}
          />
        ))}
      </main>
    </div>
  )
}
