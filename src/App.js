import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <Default />
      </>
    );
  }
}

export default App;
