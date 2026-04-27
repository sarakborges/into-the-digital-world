export type DialogType = {
  speaker?: string
  speakerAvatar?: string
  content: React.ReactNode
  options?: Array<{
    text: string
    action: () => void
  }>
}
