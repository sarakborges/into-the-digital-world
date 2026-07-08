import { getDialogs } from './getDialogs.helper'
import { getTexts } from './getTexts.helper'

export const getTranslation = (
  key: string,
  replace?: Record<string, string>
): string => {
  let value = getTranslation(key) || getTranslation(key)

  if (!replace) {
    return value
  }

  for (const replaceKey of Object.keys(replace)) {
    value = value.replaceAll(replaceKey, replace[replaceKey])
  }

  return value
}

export { getTexts, getDialogs }
