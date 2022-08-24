import React, { Component } from "react";
import CategoryListComponent from "../../redux/reducers/category/CategoryListComponent";
export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h2>Categories</h2>
        <CategoryListComponent />
      </div>
    );
  }
}
