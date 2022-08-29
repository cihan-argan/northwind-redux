import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, changeCategory } from "./CategorySlice";
import { ListGroup, ListGroupItem } from "reactstrap";

function CategoryListComponent() {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.CategorySlice.data);
  const categoryCurrent = useSelector(
    (state) => state.CategorySlice.currentCategory
  );
  // const categoryDataStatus = useSelector((state) => state.CategorySlice.status);

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ListGroup>
        {categoryData.map((categoryItem) => (
          <ListGroupItem
            active={categoryItem.id === categoryCurrent.id}
            onClick={() => dispatch(changeCategory(categoryItem))}
            key={categoryItem.id}
          >
            {categoryItem.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default CategoryListComponent;
