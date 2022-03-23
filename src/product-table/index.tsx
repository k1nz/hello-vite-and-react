import React, { useState } from "react";
import { DATA } from "./constants";
import SearchBar from "./SearchBar";
import { DataType } from "./type";
import ProductTable from "./ProductTable";

const FilterTableProductTable = ({ product }: { product: DataType[] }) => {
  const [filterText, setFilterText] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onInStockOnlyChange={setInStockOnly}
        onFilterTextChange={setFilterText}
      />
      <ProductTable
        product={product}
        filterText={filterText}
        inStockOnly={inStockOnly}
        onInStockOnlyChange={setInStockOnly}
        onFilterTextChange={setFilterText}
      />
    </>
  );
};

export default function Product() {
  return <FilterTableProductTable product={DATA} />;
}
