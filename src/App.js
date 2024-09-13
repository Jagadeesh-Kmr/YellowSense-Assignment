import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import Home from './components/Home'
import Jobs from './components/Jobs'
import Bookmarks from './components/Bookmarks'

import CreateContext from './Context/CreateContext'

import './App.css'

class App extends Component {
  state = {
    submit: true,
  }

  toggleSubmit = () => {
    this.setState(prevState => ({submit: !prevState.submit}))
  }

  render() {
    const {submit} = this.state
    return (
      <CreateContext.Provider
        value={{
          submit,
          toggleSubmit: this.toggleSubmit,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/bookmarks" component={Bookmarks} />
        </Switch>
      </CreateContext.Provider>
    )
  }
}

export default App
