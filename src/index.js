import React from "react";
import ReactDOM from "react-dom";
import { afterChange, store } from "react-recollect";
import Products from "./Products/Products";
import loadProducts from "./store/updaters/loadProducts";
import updatePrices from "./store/updaters/updatePrices";
import "./index.css";

store.loading = true;

ReactDOM.render(<Products />, document.getElementById("root"));

loadProducts().then(() => {
  // Every few seconds check for new prices
  setInterval(updatePrices, 3000);
});

afterChange(props => {
  localStorage.store = JSON.stringify(props.store);
});
