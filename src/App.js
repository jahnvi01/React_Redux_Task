import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "antd/dist/antd.css";
import "./styles.css";
import Products from "./components/Details";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/details/:id" component={() => <Products />} />
    </div>
  );
};
export default App;
