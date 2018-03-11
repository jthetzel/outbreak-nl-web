import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layer, Source } from 'react-mapbox-gl'
import HoverActions from '../redux/hoverRedux'
import data from '../outbreakCountries.geojson'
import { red, yellow, green, blue } from 'material-ui/colors'

export const RED = red[500]
export const YELLOW = yellow[500]
export const GREEN = green[500]
export const BLUE = blue[500]

const id = 'Countries'
// const url = 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
const url = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'



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

  componentWillReceiveProps (props) {
    const { hoverId, vaccines } = this.props
    const { map } = this.context

    if (props.hoverId !== hoverId) {
      const filterBase = ['in', 'ADMIN']
      const filter = props.hoverId ? filterBase.concat(props.hoverId) : filterBase

      map.setFilter(`${id}-hovered`, filter)
    }

    if (props.vaccines !== vaccines) {
      const filterBase = ['in', 'ADMIN']
      const filter = props.hoverId ? filterBase.concat(props.hoverId) : filterBase

      map.setFilter(`${id}-hovered`, filter)
    }
    
  }

  render () {
    const source = {
      type: 'geojson',
      data: data
      
    }

    return (
      <div>
        <Source id={id} geoJsonSource={source} />
        <Layer
          type='fill'
          sourceId={id}
          id={id}
          paint={{
            'fill-color': 'red',
            'fill-opacity': 0.4,
            'fill-color': [
              'interpolate',
              ['linear'],
              ['+', ['to-number', ['get', 'measles'], 0], ['to-number', ['get', 'mumps'], 0]],
              0, GREEN,
              1000, YELLOW,
              10000, RED
            ],
            // 'fill-color': {
            //   property: 'measles',
            //   type: 'exponential',
            //   stops: [
            //     [0, 'blue'],
            //     [1000, 'yellow'],
            //     [10000, 'red']
            //   ]
            // }
          }}
          />
        <Layer
          type='line'
          sourceId={id}
          id={`${id}-hovered`}
          paint={{ 'line-color': 'blue' }}
          filter={['in', 'ADMIN'].concat('Malaysia')}
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
/*
  'fill-color': [
  'interpolate',
  ['linear'],
  ['to-number', ['get', 'Name']],
  -2, 'red',
  0, RIVER_CLASS_COLORS[0],
  1500, RIVER_CLASS_COLORS[1],
  3000, RIVER_CLASS_COLORS[2]
  ]
*/
