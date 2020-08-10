import React, { Component } from "react";

class ProductList extends Component {
  displayProduct() {
    let resultArray = [];
    this.props.product.map((item, i) => {
      resultArray.push(
        <li key={i}>
          {item.quantity} - {item.product}
        </li>
      );
    });
    return resultArray;
  }

  render() {
    return <ul>{this.displayProduct()}</ul>;
  }
}

export default ProductList;
