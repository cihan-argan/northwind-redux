import React, { Component } from "react";
import { Badge } from "reactstrap";
import CategoryListComponent from "../../redux/reducers/category/CategoryListComponent";
export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning"> Categories </Badge>
        </h3>
        <CategoryListComponent />
      </div>
    );
  }
}
