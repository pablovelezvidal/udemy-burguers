import React from "react";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact component={BurgerBuilder}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Layout>
    </div>
  );
}

export default App;
