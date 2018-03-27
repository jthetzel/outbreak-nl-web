import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import HoverCard from '../components/HoverCard'

const styles = theme => ({
  container: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 5000
  },
  paper: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  }
})

const HoverCardContainer = props => {
  const { classes, feature, vaccines } = props

  if (!feature) {
    return null
  }

  const { properties: { country, measles, mumps, rubella, poliomyelitis, tetanus }} = feature
  const outbreaks = [
    { name: 'measles', value: measles },
    { name: 'mumps', value: mumps },
    { name: 'rubella', value: rubella },
    { name: 'poliomyelitis', value: poliomyelitis },
    { name: 'tetanus', value: tetanus },
    ]

  const unprotectedOutbreaks = outbreaks.filter(outbreak => vaccines.indexOf(outbreak.name) === -1)
  
  return (
    <div className={classes.container} >
      <HoverCard country={country} outbreaks={unprotectedOutbreaks} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    feature: state.hover.feature,
    vaccines: state.vaccine.vaccines
  }
}
                   
export default connect(mapStateToProps, null)(withStyles(styles)(HoverCardContainer))
