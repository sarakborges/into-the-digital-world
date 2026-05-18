import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import './Encyclopedia.style.scss'
import { AllDigimons } from '@/GameData/Digimons'

export const Encyclopedia = () => {
  const { profile } = useProfile()

  const partners = profile?.partnerDigimons!

  return (
    <>
      {Object.values(partners).map((partner) => (
        <>
          <Text>{AllDigimons[partner.baseDigimon].name}</Text>
        </>
      ))}
    </>
  )
}
