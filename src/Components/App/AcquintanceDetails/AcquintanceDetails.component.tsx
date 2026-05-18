import { getTexts } from '@/Helpers/getTexts.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { useDigivice } from '@/Hooks/Digivice.hook'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

import './AcquintanceDetails.style.scss'

export const AcquintanceDetails = () => {
  const { digivice } = useDigivice()

  if (!digivice.currentAcquintance) {
    return <></>
  }

  const npc = AllNpcs[digivice.currentAcquintance]

  return (
    <div className="npc-profile">
      <header className="npc-header">
        <aside className="profile-avatar">
          <div className="npc-avatar">
            <Portrait alt={npc.name} src={`/npc_portraits/${npc.id}.webp`} />
          </div>
        </aside>

        <main className="npc-info">
          <Text>
            {getTexts('ACQUINTANCE_NAME').replaceAll('[NAME]', npc?.name)}
          </Text>

          {!!npc.title && <Text>{getTexts(npc.title)}</Text>}
        </main>
      </header>

      <main>
        <Text as="p">{npc.description}</Text>
      </main>
    </div>
  )
}
