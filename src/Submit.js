import React, { Comment, Component } from "react";
import Product from "./product";
import ProductList from "./prodctList";

class Submit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: [],
      newProduct: {
        name: "erin",
        product: "nike",
        quantity: 5,
      },
    };
    this.submitProduct = this.submitProduct.bind(this);
  }
  submitProduct(event) {
    event.preventDefault() 
    console.log("product submitted");
    console.log(this.name.value, this.description.value);
    let newProduct = this.state.newProduct;

    newProduct.name = this.name.value;
    newProduct.description = this.description.value;

    this.setState({ newProduct });

    let recipes = this.state.recipes;
    recipes.push(newProduct);

    this.setState({ recipes });
    console.log(recipes);
  }

  addProduct(quantity, product) {
    //console.log("product added on submit click", quantity, product);
    let newProduct = this.state.newProduct;
    newProduct.product.push({ quantity: quantity, product: product });
    this.setState({ newProduct: newProduct });
    console.log(newProduct);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12"></div>
          <h1>Add a Product</h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Product Name</label>
              <input
                ref={(input) => {
                  this.name = input;
                }}
                type="text"
                className="form-control"
                id="name"
                placeholder="Product Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">About Product</label>
              <textarea
                ref={(input) => {
                  this.description = input;
                }}
                type="text"
                className="form-control"
                id="description"
                placeholder="About Product"
              />
            </div>
            <ProductList recipe={this.state.newProduct} />
            <Product
              addProduct={(quantity, product) => {
                this.addProduct(quantity, product);
              }}
            />

            {/* <div className="form-group">
              <label for="exampleInputFile">File input</label>
              <input type="file" id="exampleInputFile" />
              <p className="help-block">Example block-level help text here.</p>
            </div> */}
            <button
              type="submit"
              className="btn btn-toggle"
              onClick={this.submitProduct}
            >
              Submit Product
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Submit;
