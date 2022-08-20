import React, { Component } from "react";
import { Example } from "../../redux/reducers/category/Example";
export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h2>Categories</h2>
        <Example />
      </div>
    );
  }
}
