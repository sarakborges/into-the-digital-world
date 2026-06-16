import { useProfileStore } from '@/Stores/Profile.store'

export const saveSession = ({ key, value }: { key: string; value: any }) => {
  try {
    const { setProfile } = useProfileStore.getState()

    sessionStorage.setItem(`itdw_${key}`, JSON.stringify(value))

    setProfile(value)
  } catch {
    console.warn(`Error saving session: itdw_${key}`)
    console.warn(value)
  }
}
