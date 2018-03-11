import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import { CENTER } from '../config'
import Countries from '../Layers/Countries'

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYy1jb3JlIiwiYSI6ImNqZWl3bzI0MzBsNm4zM21lcjBsZXpvajUifQ.gmSOoJC8y-fk9rNz88-gTg',
  attributionControl: false
})


class MapboxMap extends Component {
  handleClick = (map, event) => {
   
  }
  
  render () {
    return (
      <Map
        onClick={this.handleClick}
        center={CENTER}
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
        <Countries />
      </Map>
    )
  }
}

export default MapboxMap
