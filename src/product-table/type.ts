import React from "react";

export type DataType = {
  price: string;
  name: string;
  category: string;
  stocked: boolean;
};
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export interface ProductTableState {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: SetState<string>;
  onInStockOnlyChange: SetState<boolean>;
}
