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
    baseDigimon: baseDigimon!.id
  }

  for (let componentItem of Object.keys(components)) {
    const componentQuantity = components[componentItem] || 0
    const coresQuantity = profile.cores[componentItem] || 0
    const updatedCoresQuantity = coresQuantity - componentQuantity

    if (updatedCoresQuantity < 0) {
      continue
    }

    profile.cores[componentItem] = updatedCoresQuantity
  }

  return {
    ...profile,
    partners: [...(profile.partners ?? []), { ...newDigimon }]
  }
}
