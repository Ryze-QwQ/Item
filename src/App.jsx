import { Component } from 'react'
import { routes } from './App.route'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            routes.map(router => {
              return <Route
                key={router.path}
                path={router.path}
                component={router.component}
                exact={router.exact}
              />
            })
          }
        </Switch>
      </Router>
    )
  }
}

export default App;