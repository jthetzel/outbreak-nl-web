import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import List, { ListItem, ListItemText } from 'material-ui/List';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox'
import { OUTBREAKS } from '../config'
import VaccineActions from '../redux/vaccineRedux'

class VaccineList extends PureComponent {
  handleClick = item => {
    const { vaccineToggled } = this.props

    vaccineToggled(item)
  }

  render () {
  const { vaccines, vaccineToggled } = this.props
  
  const items = OUTBREAKS.map(item => {
    const checked = vaccines.indexOf(item) === -1 ? false : true
    return (
      <ListItem dense={true} key={item} >
        <Checkbox checked={checked} onChange={() => this.handleClick(item)} />
        <ListItemText primary={item} />
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

export default connect(mapStateToProps, mapDispatchToProps)(VaccineList)
