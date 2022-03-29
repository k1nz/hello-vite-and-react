import React from "react";

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export type AppNameType = "Product" | "TicTacToe";
export type AppListType = Record<AppNameType, JSX.Element>;
export interface TabPropsType {
  appList: AppListType;
  currentAppName: AppNameType;
  setCurrentAppName: Function;
}
