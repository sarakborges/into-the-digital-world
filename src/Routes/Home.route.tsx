import { ProfileProvider } from '@/Contexts/Profile.context'

import { HomeTemplate } from '@/Components/Templates/Home'

export const HomeRoute = () => {
  return (
    <ProfileProvider>
      <HomeTemplate />
    </ProfileProvider>
  )
}
