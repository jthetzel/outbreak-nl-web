import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import HoverCard from '../components/HoverCard'

console.log(HoverCard)

const styles = theme => ({
  container: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 5000
  }
})

const HoverCardContainer = props => {
  const { classes, feature } = props
  console.log(feature)
  if (!feature) {
    return null
  }

  const { properties: { country }} = feature
  
  return (
    <div className={classes.container} >
      <HoverCard country={country} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    feature: state.hover.feature
  }
}
                   
export default connect(mapStateToProps, null)(withStyles(styles)(HoverCardContainer))
