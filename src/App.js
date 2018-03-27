import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ReactGA from 'react-ga'
import configureStore from './redux/configureStore'
import Root from './containers/Root'

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-116513283-1')
  ReactGA.pageview('/')
}

const store = configureStore()

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
