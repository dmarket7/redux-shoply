import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import InventoryContainer from './containers/InventoryContainer'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={() => <InventoryContainer />} />
      </div>
    );
  }
}

export default Routes;