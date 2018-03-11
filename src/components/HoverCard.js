import React  from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'

const styles = theme => ({

})

const HoverCard = (props) => {
  const { classes, country } = props

  if (!country) {
    return null
  }
  
  return (
    <Card>
      <CardHeader title={country} />
    </Card>
  )
}

HoverCard.defaultProps = {
  country: 'Malaysia'
}

export default withStyles(styles)(HoverCard)
