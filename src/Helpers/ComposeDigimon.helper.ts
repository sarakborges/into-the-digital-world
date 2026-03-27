import type { CompositionComponentsType } from '@/Types/Composition.type'
import type { DigimonType, PartnerDigimonType } from '@/Types/Digimon.type'
import type { ProfileType } from '@/Types/Profile.type'

export const composeNewDigimon = ({
  id,
  name,
  profile,
  baseDigimon,
  components
}: {
  id: string
  name: string
  profile: ProfileType
  baseDigimon: DigimonType
  components: CompositionComponentsType
}) => {
  const newDigimon: PartnerDigimonType = {
    id: id,
    name,
    baseDigimon: baseDigimon!.id,
    level: 1,
    experience: 0,
    points: 0
  }

  return {
    ...profile,
    partners: [...(profile.partners ?? []), { ...newDigimon }],

    cores: profile.cores.map((coreItem) => {
      const componentQuantity = components[coreItem.id]

      if (!componentQuantity) {
        return coreItem
      }

      return {
        ...coreItem,
        quantity: coreItem.quantity - componentQuantity
      }
    })
  }
}
