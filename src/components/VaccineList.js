import React from 'react'
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

const VaccineList = props => {
  const items = OUTBREAKS.map(item => {
    return (
      <ListItem>
        <Checkbox />
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

export default VaccineList
