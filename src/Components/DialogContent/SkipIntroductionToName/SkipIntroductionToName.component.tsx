import { IntoTheDigitalWorld004 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/004.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

// import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

export const SkipIntroductionToName = () => {
  // const { savedProfiles } = useSavedProfilesStore.getState()

  const skipToName = () => {
    changeDialog(IntoTheDigitalWorld004)
  }

  // if (!savedProfiles) {
  //   return <></>
  // }

  return (
    <div className="dialog-options">
      <ShadowButton onClick={skipToName} variation="small">
        {getTexts('ITDW_001_SKIP')}
      </ShadowButton>
    </div>
  )
}
