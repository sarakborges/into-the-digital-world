import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'

import { ResearchTemplate } from '@/Components/Templates/Research'

export const ResearchRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <ResearchTemplate />
    </BattleProvider>
  </ProfileProvider>
)
