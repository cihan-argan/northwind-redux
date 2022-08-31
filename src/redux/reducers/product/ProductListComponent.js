import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./ProductSlice";
import { addToCart } from "../cart/CartSlice";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";

function ProductListComponent() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.ProductSlice.products);
  const currentCategory = useSelector(
    (state) => state.CategorySlice.currentCategory
  );

  useEffect(() => {
    dispatch(getProducts(currentCategory.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th> Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units In Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productData.map((productItem) => (
            <tr key={productItem.id}>
              <th scope="row">{productItem.id} </th>
              <td> {productItem.productName} </td>
              <td>{productItem.unitPrice} </td>
              <td>{productItem.quantityPerUnit}</td>
              <td>{productItem.unitsInStock}</td>
              <td>
                <Button
                  color="success"
                  onClick={() => {
                    dispatch(addToCart(productItem));
                    alertify.success(productItem.productName + "Eklendi");
                  }}
                >
                  Ekle
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductListComponent;
