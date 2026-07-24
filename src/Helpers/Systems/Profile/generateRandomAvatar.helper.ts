import type { AvatarType } from '@/Types/Avatar.type'

import { AVATAR_OPTIONS } from '@/Consts/Avatars.const'

const getRandomOption = <Option>(
  options: readonly [Option, ...Array<Option>]
): Option => {
  const index = Math.floor(Math.random() * options.length)

  return options[index] ?? options[0]
}

export const generateRandomAvatar = (): AvatarType => {
  return {
    clothes: getRandomOption(AVATAR_OPTIONS.clothes),
    eyes: getRandomOption(AVATAR_OPTIONS.eyes),
    expression: getRandomOption(AVATAR_OPTIONS.expression),
    hairColor: getRandomOption(AVATAR_OPTIONS.hairColor),
    hair: getRandomOption(AVATAR_OPTIONS.hair),
    skin: getRandomOption(AVATAR_OPTIONS.skin)
  }
}
