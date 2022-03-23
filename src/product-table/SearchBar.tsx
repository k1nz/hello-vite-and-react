import React from "react";
import { ProductTableState } from "./type";

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: ProductTableState) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        placeholder="Search..."
        type="text"
        onChange={(event) => onFilterTextChange(event.target.value)}
        value={filterText}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(event) => onInStockOnlyChange(event.target.checked)}
        />
        Only show products in stock
      </label>
    </div>
  );
};

export default SearchBar;
