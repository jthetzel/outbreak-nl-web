import  React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card'
import VaccineList from './VaccineList'
import Logo from '../assets/logo.png'

console.log(Logo)
const styles = theme => ({
  paper: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 0
  },
  content: {
    padding: 0,
    paddingBottom: 0
  },
  title: {

  }
})

const SideDrawer = props => {
  const { classes } = props
  return (
    <Card classes={{root: classes.paper}}>
      <CardContent style={{ backgroundColor:'white', paddingBottom: '0px' }} >
        <img src={Logo} style={{height: '50px'}} />
        <Typography variant={'caption'}>Current Vaccinces</Typography>
      </CardContent>
      <CardContent classes={{root: classes.content}} style={{ padding: 0 }}>
        <VaccineList />
      </CardContent>
    </Card>
  )
  
}

export default withStyles(styles)(SideDrawer)
