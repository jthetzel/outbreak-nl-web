import React, { PureComponent } from 'react'
import { Layer, Source } from 'react-mapbox-gl'

const id = 'Countries'
const url = 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'

export class Countries extends PureComponent {
  render () {
    const source = {
      type: 'geojson',
      data: url
      
    }

    return (
      <div>
        <Source id={id} geoJsonSource={source} />
        <Layer type='fill' sourceId={id} id={id + '-fill'} paint={{ 'fill-color': 'red', 'fill-opacity': 0.5 }} />
        <Layer type='line' sourceId={id} id={id + 'line'} paint={{ 'line-color': 'blue'}} />
      </div>
    )
  }
}

export default Countries
