import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./product-table";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-main-container">
          <Product />
        </div>
      </header>
    </div>
  );
}
