import { clearGameSession } from '@/Helpers/Systems/Data/clearGameSession.helper'

export const logoff = (): void => {
  clearGameSession()
}
