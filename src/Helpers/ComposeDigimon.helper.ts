import type { CompositionTemplateType } from '@/Types/Composition.type'
import type { DigimonType, PartnerDigimonType } from '@/Types/Digimon.type'
import type { ProfileType } from '@/Types/Profile.type'

export const composeNewDigimon = ({
  id,
  name,
  profile,
  template,
  baseDigimon
}: {
  id: string
  name: string
  profile: ProfileType
  template: CompositionTemplateType
  baseDigimon: DigimonType
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
      const templateCore = template?.data?.find(
        (templateCoreItem) => templateCoreItem.id === coreItem.id
      )

      if (!templateCore) {
        return coreItem
      }

      return {
        ...coreItem,
        quantity: coreItem.quantity - templateCore.quantity
      }
    })
  }
}
