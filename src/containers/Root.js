import React, { Component } from 'react'
import { connect } from 'react-redux'
import Map from './Map'
import logo from '../logo.svg'
import './Root.css'
import OutbreakActions from '../redux/outbreakRedux'

class App extends Component {
  componentDidMount = () => {
    this.props.outbreakUpdateRequested()
  }

  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    center: 1
  }

}
const mapDispatchToProps = dispatch => {
  return {
    outbreakUpdateRequested: () => dispatch(OutbreakActions.outbreakUpdateRequested())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
