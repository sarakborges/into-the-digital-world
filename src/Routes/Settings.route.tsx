import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'

import { SettingsTemplate } from '@/Components/Templates/Settings'

export const SettingsRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <SettingsTemplate />
    </BattleProvider>
  </ProfileProvider>
)
