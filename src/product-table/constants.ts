import React from "react";
import { DataType } from "./type";

export const flexAroundStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};

export const DATA: DataType[] = [
  { category: "Fruits", price: "$1", stocked: false, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: false, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
