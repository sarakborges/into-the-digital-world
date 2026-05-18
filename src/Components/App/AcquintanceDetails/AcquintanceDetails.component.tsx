import { Button } from '@/Components/System/Button'
import './AcquintanceDetails.style.scss'
import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { AllNpcs } from '@/GameData/Npcs'
import { getTexts } from '@/Helpers/getTexts.helper'
import { useDigivice } from '@/Hooks/Digivice.hook'

export const AcquintanceDetails = () => {
  const { digivice, setDigivice } = useDigivice()

  if (!digivice.currentAcquintance) {
    return <></>
  }

  const npc = AllNpcs[digivice.currentAcquintance]

  const clearCurrentAcquintance = () => {
    setDigivice({ ...digivice, currentAcquintance: undefined })
  }

  return (
    <div className="npc-profile">
      <header className="npc-header">
        <aside className="profile-avatar">
          <div className="npc-avatar">
            <Portrait alt={npc.name} src={`/npc_portraits/${npc.id}.webp`} />
          </div>
        </aside>

        <aside>
          <Button onClick={clearCurrentAcquintance}>
            {getTexts('BUTTON_RETURN')}
          </Button>
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
