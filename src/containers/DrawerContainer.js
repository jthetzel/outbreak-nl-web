import React, { PureComponent } from 'react'
import { withStyles } from 'material-ui/styles'
import Drawer from '../components/Drawer'

const styles = theme => ({
  container: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    zIndex: 5001
  }
})


const DrawerContainer = props => {
  const { classes } = props
  return (
    <div className={classes.container} >
      <Drawer />
    </div>
  )
}

export default withStyles(styles)(DrawerContainer)
