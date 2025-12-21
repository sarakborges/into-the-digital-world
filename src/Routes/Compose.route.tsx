import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'

import { ComposeTemplate } from '@/Components/Templates/Compose'

export const ComposeRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <ComposeTemplate />
    </BattleProvider>
  </ProfileProvider>
)
