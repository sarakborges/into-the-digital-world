import { ProfileProvider } from '@/Contexts/Profile.context'

import { StarterSelectionTemplate } from '@/Components/Templates/StarterSelection'

export const StarterSelectionRoute = () => (
  <ProfileProvider>
    <StarterSelectionTemplate />
  </ProfileProvider>
)
