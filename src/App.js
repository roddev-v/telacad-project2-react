import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Category from "./pages/Category";

import { Component } from "react";
import Product from "./pages/Product";
import Cart from "./pages/Cart";


class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/category/:categoryName" component={Category}></Route>
          <Route path="/products/:categoryName/:productId" component={Product}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
