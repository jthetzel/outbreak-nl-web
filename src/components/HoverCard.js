import React  from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'

const styles = theme => ({

})

const HoverCard = (props) => {
  const { classes, country, outbreaks } = props

  const items = outbreaks.map(item => {
    const outbreak = item.name
    const number = item.value || 0

    return (
      <li>
        {outbreak} {number}
      </li>
    )
  })
  
  if (!country) {
    return null
  }
  
  return (
    <Card>
      <CardHeader title={country} />
        <ul>
          {items}
        </ul>
      <CardContent>
        
      </CardContent>
    </Card>
  )
}

HoverCard.defaultProps = {
  country: 'Malaysia'
}

export default withStyles(styles)(HoverCard)
