import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { MapContext } from '@/Contexts/Map.context'

import { Typography } from '@/Components/System/Typography'

import { MapDetailsCombat } from '@/Components/App/MapDetailsCombat'
import { MapDetailsCommerce } from '@/Components/App/MapDetailsCommerce'
import { MapDetailsQuest } from '@/Components/App/MapDetailsQuest'
import { MapDetailsBoss } from '@/Components/App/MapDetailsBoss'
import { MapDetailsNpcs } from '@/Components/App/MapDetailsNpcs'

import './MapDetails.style.scss'

export const MapDetails = () => {
  const mapContext = useContext(MapContext)

  if (!mapContext) {
    return
  }

  const { currentMap } = mapContext

  return (
    <aside className="map-details">
      {!currentMap?.id && (
        <Typography as="span">{getTexts('MAPS_DETAILS_TEXT')}</Typography>
      )}

      {currentMap?.id && (
        <div className="map-details-info">
          <Typography as="h2">{currentMap.name}</Typography>

          <MapDetailsCommerce />
          <MapDetailsQuest />
          <MapDetailsCombat />
          <MapDetailsBoss />
          <MapDetailsNpcs />
        </div>
      )}
    </aside>
  )
}
