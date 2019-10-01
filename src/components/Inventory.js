import React, { Component } from "react";
import {Link} from 'react-router-dom';
// import Product from './Product'

class Inventory extends Component {
  render() {
    console.log("Props:", this.props)
    let displayArray = []
    for (let key in this.props.products) {
      displayArray.push(this.props.products[key])
    }
    return (
      <ul>{displayArray.map(item => {
        return <li>{item.name}</li>
      })}</ul>
    );
  }
}

export default Inventory;