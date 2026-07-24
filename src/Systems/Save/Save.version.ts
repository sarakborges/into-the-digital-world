import { GAME_VERSION } from '@/Consts/Game.const'

export type CurrentGameVersionProfile = {
  gameVersion: typeof GAME_VERSION
}

export const isProfileFromCurrentGameVersion = (
  profile: unknown
): profile is CurrentGameVersionProfile => {
  return (
    !!profile &&
    typeof profile === 'object' &&
    Reflect.get(profile, 'gameVersion') === GAME_VERSION
  )
}
