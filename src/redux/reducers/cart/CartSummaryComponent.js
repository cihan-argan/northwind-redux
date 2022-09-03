import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import { useSelector } from "react-redux";

const CartSummaryComponent = () => {
  const cartData = useSelector((state) => state.CartSlice.cartItems);
  const renderEmpty = () => {
    console.log(cartData);
    return (
      <NavItem>
        <NavLink>Sepetiniz Boş</NavLink>
      </NavItem>
    );
  };
  const renderSummary = (cartData) => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu end>
          {cartData.map((item) => (
            <DropdownItem key={item.product.id}>
              {item.product.productName}
              <Badge color="success">{item.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>Sepete Git</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  if (cartData.length <= 0) {
    return renderEmpty();
  } else {
    return renderSummary(cartData);
  }
};

export default CartSummaryComponent;
