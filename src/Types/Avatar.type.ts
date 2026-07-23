export type AvatarType = {
  expression: string
  skin: string
  eyes: string
  hair: string
  hairColor: string
  clothes: string
}

export type AvatarCustomizationLayer = Exclude<keyof AvatarType, 'expression'>
