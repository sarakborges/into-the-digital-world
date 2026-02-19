import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'
import { CompositionProvider } from '@/Contexts/Composition.context'

import { ComposeDigimonTemplate } from '@/Components/Templates/ComposeDigimon'

export const ComposeDigimonRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <CompositionProvider>
        <ComposeDigimonTemplate />
      </CompositionProvider>
    </BattleProvider>
  </ProfileProvider>
)
