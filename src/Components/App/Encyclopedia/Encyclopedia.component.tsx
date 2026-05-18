import { AllDigimons } from '@/GameData/Digimons'

import { useProfile } from '@/Hooks/Profile.hook'

import { Button } from '@/Components/System/Button'

import './Encyclopedia.style.scss'

export const Encyclopedia = () => {
  const { profile } = useProfile()

  const partners = Object.values(profile?.partnerDigimons!).map((partner) => ({
    ...partner,
    baseDigimon: AllDigimons[partner.baseDigimon]
  }))

  return (
    <>
      {partners.map((partner) => (
        <Button>{partner?.baseDigimon?.name}</Button>
      ))}
    </>
  )
}
