import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'

import { HomeTemplate } from '@/Components/Templates/Home'

export const HomeRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <HomeTemplate />
    </BattleProvider>
  </ProfileProvider>
)
