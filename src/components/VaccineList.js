import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox'
import { OUTBREAKS } from '../config'
import VaccineActions from '../redux/vaccineRedux'

const styles = them => ({
  item: {
    padding: 0
  }
})

class VaccineList extends PureComponent {
  handleClick = item => {
    const { vaccineToggled } = this.props

    vaccineToggled(item)
  }

  render () {
    const { classes, vaccines } = this.props
  
  const items = OUTBREAKS.map(item => {
    const checked = vaccines.indexOf(item) === -1 ? false : true
    return (
      <ListItem dense={true} key={item} className={classes.item}>
        <Checkbox checked={checked} onChange={() => this.handleClick(item)} />
          <ListItemText primary={<Typography variant={'caption'}>{item}</Typography>} textDense/>
      </ListItem>
    )
  })

  return (
    <List >
      {items}
    </List>
  )
  }
}

const mapStateToProps = state => {
  return {
    vaccines: state.vaccine.vaccines
  }
}

const mapDispatchToProps = dispatch => {
  return {
    vaccineToggled: vaccine => dispatch(VaccineActions.vaccineToggled(vaccine))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VaccineList))
