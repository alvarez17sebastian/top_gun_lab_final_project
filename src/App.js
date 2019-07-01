import React from 'react';
import Home from './Components/Home';
import HomeAchievements from './Components/HomeAchievements';
import NotFound from './Components/NotFound'
import EmployeesDetails from './containers/EmployeesDetails';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrizesList from './containers/PrizesList';
import PrizeDetail from './containers/PrizeDetail';
import "./App.css";
import "bulma/css/bulma.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


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
        <Route exact path="/prizes" component={PrizesList} />
        <Route exact path="/prizes/:id" component={PrizeDetail} />
        <Route component={NotFound} />
      </Switch>
     
    </HashRouter>
  );
}







export default App;








