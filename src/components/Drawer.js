import  React from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
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
