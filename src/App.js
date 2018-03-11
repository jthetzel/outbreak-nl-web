import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import injectTapEventPlugin from 'react-tap-event-plugin'
// import ReactGA from 'react-ga'
import Root from './containers/Root'

// ReactGA.initialize('UA-102217061-1')
// ReactGA.pageview('/')

const store = configureStore()
// work around for material-ui tap events
// injectTapEventPlugin()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App
