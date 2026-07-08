import { useProfileStore } from '@/Stores/Profile.store'

export const isNpcAcquainted = (npcId: number | string): boolean => {
  const { profile } = useProfileStore.getState()

  return Object.keys(profile?.npcAcquaintances ?? {}).includes(npcId.toString())
}
