import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'
import { CompositionProvider } from '@/Contexts/Composition.context'

import { ComposeTemplate } from '@/Components/Templates/Compose'

export const ComposeRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <CompositionProvider>
        <ComposeTemplate />
      </CompositionProvider>
    </BattleProvider>
  </ProfileProvider>
)
