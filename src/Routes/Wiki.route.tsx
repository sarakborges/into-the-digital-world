import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'

import { WikiTemplate } from '@/Components/Templates/Wiki'

export const WikiRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <WikiTemplate />
    </BattleProvider>
  </ProfileProvider>
)
