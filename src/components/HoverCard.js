import React  from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = theme => ({
  paper: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  }
})

const HoverCard = (props) => {
  const { country, outbreaks } = props

  const items = outbreaks.map(item => {
    const outbreak = item.name
    const number = item.value || 0

    return (
      <ListItem key={outbreak} dense={true} >
        <ListItemText primary={outbreak} secondary={`${number.toLocaleString()} reported`} />
      </ListItem>
    )
  })
  
  if (!country) {
    return null
  }
  
  return (
    <Card>
      <CardHeader subheader={country} style={{paddingBottom: 0}} />
      <CardContent>
        <List>
          {items}
        </List>
      </CardContent>
    </Card>
  )
}

HoverCard.defaultProps = {
  country: 'Malaysia'
}

export default withStyles(styles)(HoverCard)
