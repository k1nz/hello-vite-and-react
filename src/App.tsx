import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "@/product-table";
import TicTacToe from "@/tic-tac-toe";
import { AppListType, AppNameType, TabPropsType } from "@/type";

export const APP_LIST: AppListType = {
  Product: <Product />,
  TicTacToe: <TicTacToe />,
};

const Tab = ({ appList, currentAppName, setCurrentAppName }: TabPropsType) => {
  return (
    <div className="tab">
      {Object.keys(appList).map((__appName, idx) => {
        return (
          <div
            className={
              currentAppName === __appName ? "tab-item active" : "tab-item"
            }
            onClick={() => setCurrentAppName(__appName)}
            key={idx}
          >
            {__appName}
          </div>
        );
      })}
    </div>
  );
};

export default function App() {
  const [currentAppName, setCurrentAppName] = useState<AppNameType>("Product");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tab
          appList={APP_LIST}
          currentAppName={currentAppName}
          setCurrentAppName={setCurrentAppName}
        />
        <div className="App-main-container">{APP_LIST[currentAppName]}</div>
      </header>
    </div>
  );
}
