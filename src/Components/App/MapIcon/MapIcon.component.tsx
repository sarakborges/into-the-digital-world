import { MAP_SUBTITLES } from '@/Consts/MapSubtitles.const'

import './MapIcon.style.scss'

export const MapIcon = ({ mapType, sm }: { mapType: string; sm?: boolean }) => {
  const classes = ['map-icon', `map-type-${mapType.toLocaleLowerCase()}`]

  if (!!sm) {
    classes.push('sm')
  }

  return <div className={classes.join(' ')}>{MAP_SUBTITLES[mapType].icon}</div>
}
