import React from "react";
import { Table, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import alertify from "alertifyjs";
import { removeFromCart } from "../../redux/reducers/cart/CartSlice";
export default function CartDetail() {
  const cartData = useSelector((state) => state.CartSlice.cartItems);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart({ product }));
  };
  return (
    <div>
      <h3>Sepet Detayı</h3>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th> Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item) => (
            <tr key={item.product.id}>
              <th scope="row">{item.product.id} </th>
              <td> {item.product.productName} </td>
              <td>{item.product.unitPrice} </td>
              <td>{item.product.quantity}</td>

              <td>
                <Button
                  color="danger"
                  onClick={() => {
                    handleRemoveFromCart(item.product);
                    alertify.error(item.productName + " Sepetten Silindi");
                  }}
                >
                  x
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
