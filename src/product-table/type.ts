import { SetStateType } from "@/type";

export type DataType = {
  price: string;
  name: string;
  category: string;
  stocked: boolean;
};
export interface ProductTableState {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: SetStateType<string>;
  onInStockOnlyChange: SetStateType<boolean>;
}
