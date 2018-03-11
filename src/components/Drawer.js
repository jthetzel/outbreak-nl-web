import  React from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Drawer from 'material-ui/Drawer'
import VaccineList from './VaccineList'


const styles = theme => ({
  paper: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  }
})

const SideDrawer = props => {
  const { classes } = props
  return (
    <Card className={classes.paper}>
      <CardContent>
        <VaccineList />
      </CardContent>
    </Card>
  )
  
}

export default withStyles(styles)(SideDrawer)
