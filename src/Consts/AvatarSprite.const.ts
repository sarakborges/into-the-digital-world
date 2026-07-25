export const AVATAR_SPRITE_FRAME = {
  width: 64,
  height: 96,
  framesPerDirection: 4
} as const

export const AVATAR_SPRITE_DIRECTIONS = [
  'down',
  'downLeft',
  'left',
  'upLeft',
  'up',
  'upRight',
  'right',
  'downRight'
] as const

export type AvatarSpriteDirection =
  (typeof AVATAR_SPRITE_DIRECTIONS)[number]

export const AVATAR_SPRITE_SHEET = {
  width: AVATAR_SPRITE_FRAME.width * AVATAR_SPRITE_FRAME.framesPerDirection,
  height: AVATAR_SPRITE_FRAME.height * AVATAR_SPRITE_DIRECTIONS.length
} as const
