import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addProduct = this.addProduct.bind(this);
  }
  addProduct() {
    console.log("product added");
    console.log(this.quantity.value, this.Product.value);

    this.props.addProduct(this.quantity.value, this.Product.value);
    this.quantity.value = "";
    this.Product.value = "";
  }

  render() {
    return (
      <div className="form-group form-inline width:10%">
        <label htmlFor="quantity">size</label>
        <input
          ref={(input) => {
            this.quantity = input;
          }}
          type="text"
          className="form-control"
          id="name"
          placeholder="size"
        />
         <label htmlFor="quantity">quantity</label>
        <input
          ref={(input) => {
            this.quantity = input;
          }}
          type="text"
          className="form-control"
          id="name"
          placeholder="quantity"
        />
        <label htmlFor="ingredient">color</label>
        <input
          ref={(input) => {
            this.Product = input;
          }}
          type="text"
          className="form-control"
          id="name"
          placeholder="color"
        />
          <label htmlFor="quantity">Price</label>
        <input
          ref={(input) => {
            this.quantity = input;
          }}
          type="text"
          className="form-control"
          id="name"
          placeholder="price"
        />
        <button
          type="button"
          onClick={this.addProduct}
          className="btn btn-info"
        >
          add Product
        </button>
      </div>
    );
  }
}

// "size":"32",
// "color":"Orange",
// "quantity":"15",
// "images":["image1", "image2"],
// "price":"23000"

export default Product;
