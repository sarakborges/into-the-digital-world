import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'

import { BattleTemplate } from '@/Components/Templates/Battle'

export const BattleRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <BattleTemplate />
    </BattleProvider>
  </ProfileProvider>
)
