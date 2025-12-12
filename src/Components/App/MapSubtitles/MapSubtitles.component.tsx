import { MAP_SUBTITLES } from '@/Consts/MapSubtitles.const'
import { Typography } from '@/Components/System/Typography'

import { MapIcon } from '@/Components/App/MapIcon'

import './MapSubtitles.style.scss'

export const MapSubtitles = () => {
  return (
    <section className="map-subtitles">
      {Object.keys(MAP_SUBTITLES).map((subtitleItem) => (
        <div
          key={`map-subtitles-${subtitleItem}`}
          className="map-subtitle-item"
        >
          <MapIcon mapType={subtitleItem} sm />

          <Typography as="span">{MAP_SUBTITLES[subtitleItem].name}</Typography>
        </div>
      ))}
    </section>
  )
}
