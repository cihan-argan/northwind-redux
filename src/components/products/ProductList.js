import React, { Component } from "react";
import { Badge } from "reactstrap";
import CategoryToProducts from "../../redux/reducers/product/CategoryToProducts";
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning"> Products </Badge>
          <CategoryToProducts />
        </h3>
      </div>
    );
  }
}
