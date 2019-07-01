import React from 'react';
import Home from './Components/Home';
import HomeAchievements from './Components/HomeAchievements';
import NotFound from './Components/NotFound'
import EmployeesDetails from './containers/EmployeesDetails';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import "./App.css"

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
        <Route exact path="/achievements/" component={HomeAchievements} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;








