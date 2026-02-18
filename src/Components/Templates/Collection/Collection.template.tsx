import { useContext } from 'react'

import { ProfileContext } from '@/Contexts/Profile.context'

import { MenuWrapper } from '@/Components/App/MenuWrapper'

import './Collection.style.scss'

export const CollectionTemplate = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile } = profileContext

  return (
    <MenuWrapper>
      <main className="collection-template"></main>
    </MenuWrapper>
  )
}
