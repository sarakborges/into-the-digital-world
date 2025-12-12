import * as EnTexts from './En.text'

const texts = {
  'en-us': EnTexts
}

export const getTexts = (key: string) => {
  return texts['en-us'][key] || ''
}
