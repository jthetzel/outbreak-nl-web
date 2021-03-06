import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layer, Source } from 'react-mapbox-gl'
import HoverActions from '../redux/hoverRedux'
import data from '../outbreakCountries.geojson'
import { red, yellow, green, blue } from 'material-ui/colors'
import { OUTBREAKS } from '../config'

export const RED = red[500]
export const YELLOW = yellow[500]
export const GREEN = green[500]
export const BLUE = blue[500]

const id = 'Countries'
const sourceLayer = 'outbreakCountries'
// const url = 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
// const url = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'
const url = 'https://coresight-vector.s3-us-west-2.amazonaws.com/outbreakCountries/{z}/{x}/{y}'

export class Countries extends Component {
  static contextTypes = {
    map: PropTypes.object
  }

  componentDidMount () {
    const { map } = this.context
    map.on('click', this.handleClick)
    map.on('mousemove', this.handleHover)
  }

  componentWillUnmount () {
    const { map } = this.context
    map.off('mousemove', this.handleHover)
  }

  handleClick = event => {
    const { map } = this.context
    const { lng, lat } = event.lngLat
    const features = map.queryRenderedFeatures(event.point, { layers: [id] })

    console.log(features)
  }

  handleHover = event => {
    const { map } = this.context
    const { lng, lat } = event.lngLat
    const features = map.queryRenderedFeatures(event.point, { layers: [id] })

    this.props.hovered(features[0])
  }

  shouldComponentUpdate (nextProps) {
    if (nextProps.hoverId !== this.props.hoverId) {
      return false
    } else if (nextProps.vaccines !== this.props.vaccines) {
      return false
    } else if (nextProps === this.props) {
      return false
    }
    return true
  }

  componentWillReceiveProps (nextProps) {
    const { hoverId, vaccines } = this.props
    const { map } = this.context

    if (nextProps.hoverId !== hoverId) {
      const filterBase = ['in', 'ADMIN']
      const filter = nextProps.hoverId ? filterBase.concat(nextProps.hoverId) : filterBase

      map.setFilter(`${id}-hovered`, filter)
    }

    if (nextProps.vaccines !== vaccines) {
      const outbreaks = OUTBREAKS.filter(item => nextProps.vaccines.indexOf(item) === -1)
      const properties = outbreaks.map(item => ['to-number', ['get', item], 0])
      const fillColor = [
        'interpolate',
        ['linear'],
        ['+', ...properties],
        0, GREEN,
        300, YELLOW,
        10000, RED
      ]
      map.setPaintProperty(id, 'fill-color', fillColor)
    
    }
    
  }

  render () {
    const { vaccines } = this.props
    const outbreaks = OUTBREAKS.filter(item => vaccines.indexOf(item) === -1)
    const properties = outbreaks.map(item => ['to-number', ['get', item], 0])
    
    const source = {
      type: 'vector',
      tiles: [url],
      tileSize: 512
    }

    return (
      <div>
        <Source id={id} tileJsonSource={source} />
        <Layer
          type='fill'
          sourceId={id}
          sourceLayer={sourceLayer}
          id={id}
          paint={{
            'fill-color': 'red',
            'fill-opacity': 0.4,
            'fill-color': [
              'interpolate',
              ['linear'],
              ['+', ...properties],
              0, GREEN,
              300, YELLOW,
              10000, RED
            ]
          }}
          />
        <Layer
          type='line'
          sourceId={id}
          sourceLayer={sourceLayer}
          id={`${id}-hovered`}
          paint={{ 'line-color': 'blue' }}
          filter={['in', 'ADMIN']}
          />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hoverId: state.hover.id,
    vaccines: state.vaccine.vaccines
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hovered: feature => dispatch(HoverActions.hovered(feature))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries)
