import React from "react";
import logo from "./logo.png";
import "./App.css";
import { BinarySearch } from "./BinarySearch";

function App() {
  new BinarySearch([1, 5, 23, 65, 88, 234, 235, 4632], 3);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
          style={{
            color: "black",
            marginTop: "100px",
          }}
        >
          Check your console for Binary Search in TypeScript... visit{" "}
          <a href="https://www.gabruism.com">Gabruism</a>
        </h1>
      </header>
    </div>
  );
}

export default App;
