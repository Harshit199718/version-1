import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/navbar/navbar.components'

import Login from './pages/login/login.jsx'
import SprintRetro from './pages/sprintRetro/sprint-retro.jsx'
import CreateSquad from './pages/createSquad/create-squad.jsx'
import RetrospectComment from './pages/retrospectComments/retrospect-comment.jsx'
import ActionComment from './pages/actionComments/action-comments.jsx'
import UserManagement from './pages/UserMngmt/user-management'
import SprintManagement from './pages/sprintMngmt/sprint-management'

import './styles/index.scss';

function App() {
  return (
    <Router >
      <div>
        <Navbar />
        <Switch >
          {/* <Route path="/" exact component={Navbar} /> */}
          <Route path="/login" component={Login} />
          <Route path="/sprint-retro" component={SprintRetro} />
          <Route path="/create-squad" component={CreateSquad} />
          <Route path="/retrospect-comment" component={RetrospectComment} />
          <Route path="/action-comment" component={ActionComment} />
          <Route path="/user-management" component={UserManagement} />
          <Route path="/sprint-management" component={SprintManagement} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;