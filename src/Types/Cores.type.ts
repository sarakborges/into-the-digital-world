export type CoresType = {
  [k in 'family' | 'attribute']?: {
    [k: string]: number
  }
}
