import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import InventoryContainer from './containers/InventoryContainer'

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch >
          <Route exact path='/' render={() => <InventoryContainer />} />
          
        </Switch>
      </div>
    );
  }
}

export default Routes;