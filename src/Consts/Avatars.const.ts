import type { AvatarCustomizationLayer, AvatarType } from '@/Types/Avatar.type'

export const AVATAR_OPTIONS = {
  expression: ['default'],
  skin: ['1', '2', '3', '4', '5', '6'],
  hair: ['1', '2', '3', '4', '5', '6', '7', '8'],

  hairColor: ['blonde', 'black', 'brunette', 'ginger', 'albino'],

  eyes: [
    'teal',
    'amber',
    'green',
    'lilac',
    'yellow',
    'brown',
    'orange',
    'grey',
    'red',
    'purple',
    'pink',
    'indigo',
    'blue'
  ],

  clothes: [
    '1-black',
    '1-grey',
    '1-white',
    '1-blue',
    '1-red',
    '1-green',
    '1-yellow',
    '1-orange',
    '1-pink',
    '1-magenta'
  ]
} as const satisfies Record<
  keyof AvatarType,
  readonly [string, ...Array<string>]
>

export const AVATAR_CUSTOMIZATION_LAYERS = [
  'skin',
  'hair',
  'hairColor',
  'eyes',
  'clothes'
] as const satisfies ReadonlyArray<AvatarCustomizationLayer>
