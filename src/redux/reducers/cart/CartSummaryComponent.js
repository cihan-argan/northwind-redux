import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./CartSlice";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";
const CartSummaryComponent = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.CartSlice.cartItems);
  const handlerRemoveItem = (product) => {
    dispatch(removeFromCart({ product }));
  };
  const renderEmpty = () => {
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
              <Badge
                color="danger"
                onClick={() => {
                  handlerRemoveItem(item.product);
                  alertify.error(
                    item.product.productName + " Sepetten silindi"
                  );
                }}
              >
                X
              </Badge>
              {item.product.productName}
              <Badge color="success">{item.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cart">Sepete Git</Link>
          </DropdownItem>
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
