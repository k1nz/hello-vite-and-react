export type AppNameType = "Product" | "TicTacToe";
export type appListType = Record<AppNameType, JSX.Element>;
export interface TabPropsType {
  appList: appListType;
  currentAppName: AppNameType;
  setCurrentAppName: Function;
}
