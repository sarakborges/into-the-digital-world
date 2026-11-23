import { IntoTheDigitalWorld009 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/009.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { changeScene } from '@/Helpers/Systems/Scenes'

// import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

export const SkipIntroductionToName = () => {
  // const { savedProfiles } = useSavedProfilesStore.getState()

  const skipToName = () => {
    changeScene('rootDomainDorms')
    changeDialog(IntoTheDigitalWorld009)
  }

  // if (!savedProfiles) {
  //   return <></>
  // }

  return (
    <div className="dialog-options">
      <ShadowButton onClick={skipToName}>
        {getTexts('ITDW_001_SKIP')}
      </ShadowButton>
    </div>
  )
}
