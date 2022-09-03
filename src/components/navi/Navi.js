import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummaryComponent from "../../redux/reducers/cart/CartSummaryComponent";
export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ms-auto " navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummaryComponent />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
