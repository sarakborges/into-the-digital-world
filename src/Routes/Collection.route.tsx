import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'

import { CollectionTemplate } from '@/Components/Templates/Collection'

export const CollectionRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <CollectionTemplate />
    </BattleProvider>
  </ProfileProvider>
)
