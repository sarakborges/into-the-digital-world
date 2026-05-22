import { AllItems } from '@/GameData/Items'

import { useProfile } from '@/Hooks/Profile.hook'

import './Inventory.style.scss'
import { Text } from '@/Components/System/Text'

export const Inventory = () => {
  const { profile } = useProfile()

  if (!profile || !Object.keys(profile.items).length) {
    return
  }

  return (
    <div>
      {Object.keys(profile.items).map((item) => (
        <Text>
          <div>{AllItems[item].name}</div>
          <div>x{profile.items[item] || 0}</div>
        </Text>
      ))}
    </div>
  )
}
