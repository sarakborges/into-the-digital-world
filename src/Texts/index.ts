import * as EnTexts from '@/Texts/En.text'

const texts = {
  'en-us': EnTexts
}

export const getTexts = ({ key }) => {
  const lang = localStorage.getItem('lang')
  const parsedLang = JSON.parse(lang || '')

  if (!texts[parsedLang]) {
    return `Text "${key}" not found in lang in default language.`
  }

  if (!texts[parsedLang || 'en-us'][key]) {
    return `Text "${key}" not found in lang "${parsedLang}".`
  }

  return texts[parsedLang][key]
}
