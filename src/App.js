import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Contacts from './pages/Contacts';
import Create from './Components/CreateContact';
import Edit from './Components/EditContact';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/contacts" component={ Contacts } />
      <Route exact path="/create" component={ Create } />
      <Route exact path="/contacts/:id" component={ Edit } />
    </Switch>

  );
}

export default App;
