import { DataType, ProductTableState } from "./type";
import { flexAroundStyle } from "./constants";
import React from "react";

const ProductCategoryRow = ({ category }: { category: string }) => {
  return <h4 style={{ margin: "0 auto", padding: "5px" }}>{category}</h4>;
};

const ProductRow = ({
  goods: { name, price, stocked },
}: {
  goods: DataType;
}) => {
  return (
    <div style={{ ...flexAroundStyle, color: stocked ? "black" : "red" }}>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

const ProductTable = ({
  product,
  filterText,
  inStockOnly,
}: { product: DataType[] } & ProductTableState) => {
  const getCategories = (data: DataType[]) => {
    const map = new Map<DataType["category"], DataType[]>();
    data.forEach((goods) => {
      const { category, stocked, name } = goods;
      if (
        filterText &&
        name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
      )
        return;
      if (inStockOnly && !stocked) return;
      if (!map.has(category)) map.set(goods.category, []);
      map.get(category)!.push(goods);
    });

    return map;
  };

  let subTable: JSX.Element[] = [];
  getCategories(product).forEach((data, category) => {
    subTable.push(<ProductCategoryRow category={category} key={category} />);
    data.map((goods) => {
      inStockOnly
        ? goods.stocked &&
          subTable.push(<ProductRow goods={goods} key={goods.name} />)
        : subTable.push(<ProductRow goods={goods} key={goods.name} />);
    });
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={flexAroundStyle}>
        <p>Name</p>
        <p>Price</p>
      </div>
      <div>{subTable}</div>
    </div>
  );
};

export default ProductTable;
