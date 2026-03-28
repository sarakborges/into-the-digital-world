import { ProfileProvider } from '@/Contexts/Profile.context'
import { BattleProvider } from '@/Contexts/Battle.context'
import { CollectionProvider } from '@/Contexts/Collection.context'

import { CollectionTemplate } from '@/Components/Templates/Collection'

export const CollectionRoute = () => (
  <ProfileProvider>
    <BattleProvider>
      <CollectionProvider>
        <CollectionTemplate />
      </CollectionProvider>
    </BattleProvider>
  </ProfileProvider>
)
