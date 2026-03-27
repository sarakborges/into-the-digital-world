export type CompositionTemplateType = {
  mandatoryData?: Array<string>

  data: Array<{
    id: string
    weight: number
  }>
}

export type CompositionComponentsType = {
  [k: string]: number
}
