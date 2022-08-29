import { useSelector } from "react-redux";
import { Badge } from "reactstrap";

function CategoryToProducts() {
  const categoryCurrent = useSelector(
    (state) => state.CategorySlice.currentCategory
  );

  return <Badge color="success">{categoryCurrent.categoryName}</Badge>;
}
export default CategoryToProducts;
