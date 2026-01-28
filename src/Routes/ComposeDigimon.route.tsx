import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'

import { ComposeDigimonTemplate } from '@/Components/Templates/ComposeDigimon'

export const ComposeDigimonRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <ComposeDigimonTemplate />
    </BattleProvider>
  </ProfileProvider>
)
