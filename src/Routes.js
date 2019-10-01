import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import InventoryContainer from './containers/InventoryContainer'
import ProductContainer from './containers/ProductContainer'

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch >
          <Route exact path='/' render={() => <InventoryContainer />} />
          <Route path='/products/:id' render={(props) => <ProductContainer {...props} />} />
          {/* <Route path='/products/:id' render={(props) => <ShoppingCartContainer {...props} />} /> */}

        </Switch>
      </div>
    );
  }
}

export default Routes;