import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./CategorySlice";
import { ListGroup, ListGroupItem } from "reactstrap";

function CategoryListComponent() {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.CategorySlice.data);
  // const categoryDataStatus = useSelector((state) => state.CategorySlice.status);

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ListGroup>
        {categoryData.map((categoryItem) => (
          <ListGroupItem key={categoryItem.id}>
            {categoryItem.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default CategoryListComponent;
