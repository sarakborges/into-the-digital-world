export const MeaningfulChoiceRegistry = {
  dorimonMeeting: ['accept', 'neutral', 'refuse']
} as const

export type MeaningfulChoiceName = Extract<
  keyof typeof MeaningfulChoiceRegistry,
  string
>

export type MeaningfulChoiceValue<TName extends MeaningfulChoiceName> =
  (typeof MeaningfulChoiceRegistry)[TName][number]

export type MeaningfulChoices = {
  [TName in MeaningfulChoiceName]?: MeaningfulChoiceValue<TName> | undefined
}

export type MeaningfulChoiceReaction = {
  [TName in MeaningfulChoiceName]: {
    name: TName
    value: MeaningfulChoiceValue<TName>
  }
}[MeaningfulChoiceName]
