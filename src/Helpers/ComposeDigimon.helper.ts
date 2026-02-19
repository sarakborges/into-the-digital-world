import type { CompositionRecipeType } from '@/Types/Composition.type'
import type { DigimonType, PartnerDigimonType } from '@/Types/Digimon.type'
import type { ProfileType } from '@/Types/Profile.type'

export const composeNewDigimon = ({
  id,
  profile,
  recipe,
  baseDigimon
}: {
  id: string
  profile: ProfileType
  recipe: CompositionRecipeType
  baseDigimon: DigimonType
}) => {
  const newDigimon: PartnerDigimonType = {
    id: id,
    baseDigimon: baseDigimon!.id,
    level: 1,
    experience: 0,
    points: 0,
    name: '',
    isStarter: false
  }

  return {
    ...profile,
    partners: [...profile.partners!, { ...newDigimon }],
    cores: profile.cores.map((coreItem) => {
      const recipeCore = recipe?.cores?.find(
        (recipeCoreItem) => recipeCoreItem.id === coreItem.coreId
      )

      if (!recipeCore) {
        return coreItem
      }

      return {
        ...coreItem,
        quantity: coreItem.quantity - recipeCore.quantity
      }
    })
  }
}
