export type AppNameType = "Product" | "TicTacToe";
export type AppListType = Record<AppNameType, JSX.Element>;
export interface TabPropsType {
  appList: AppListType;
  currentAppName: AppNameType;
  setCurrentAppName: Function;
}
