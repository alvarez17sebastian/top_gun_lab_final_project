import React from 'react';
import Home from './Components/Home';

import NotFound from './Components/NotFound'
import EmployeesDetails from './containers/EmployeesDetails';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route
            exact
            path="/"
            render={() => (
                <Redirect to="/employees" />
            )}
        />
        <Route exact path="/employees" component={Home} />
        <Route exact path="/employees/:id"component={EmployeesDetails} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;








