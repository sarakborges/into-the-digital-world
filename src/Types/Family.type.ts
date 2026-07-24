export type FamilyId =
  'vb' | 'dr' | 'nsp' | 'ds' | 'nso' | 'jt' | 'me' | 'wg' | 'da'

export type FamilyType = Record<
  FamilyId,
  {
    id: FamilyId
    name: string
  }
>
