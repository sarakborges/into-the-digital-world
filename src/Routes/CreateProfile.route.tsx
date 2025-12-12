import { ProfileProvider } from '@/Contexts/Profile.context'

import { CreateProfileTemplate } from '@/Components/Templates/CreateProfile'

export const CreateProfileRoute = () => (
  <ProfileProvider>
    <CreateProfileTemplate />
  </ProfileProvider>
)
