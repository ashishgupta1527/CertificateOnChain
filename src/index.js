import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import DeCAT from './views/DeCAT'
import Verify from './views/Verify'
import Portfolio from './views/Portfolio'
import Endorsement from './views/Endorsement'
import { AppProvider } from './AppContext'
import Multiple from './views/Multiple'
import ReputationSystem from './views/ReputationSystem'

const App = () => {
  return (
    <Router>
      <AppProvider>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={DeCAT} exact path="/decat" />
        <Route component={Verify} exact path="/verify" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Endorsement} exact path="/endorsement" />
        <Route component={Multiple} exact path="/multiple" />
        <Route component={ReputationSystem} exact path="/reputation" />
      </div>
      </AppProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
