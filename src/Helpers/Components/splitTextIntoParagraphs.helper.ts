export const splitTextIntoParagraphs = (text: unknown): Array<string> => {
  return `${text}`.split('\n\n')
}
