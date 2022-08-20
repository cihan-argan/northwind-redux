import React from "react";
import { useSelector } from "react-redux";

export function Example() {
  const item = useSelector((state) => state.change);
  return (
    <div>
      <h5>Seçili Kategori:{item.currentCategory.categoryName}</h5>
    </div>
  );
}
