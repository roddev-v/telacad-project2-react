import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Category from "./pages/Category";

import { Component, lazy } from "react";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { initUserData } from "./redux/actions/user.actions";
import { connect } from "react-redux";
import { Suspense } from "react";

const LazyAbout = lazy(() => import('./pages/About'));
const LazyHome = lazy(() => import('./pages/Home'));
const LazyCategory = lazy(() => import('./pages/Category'));
const LazyProduct = lazy(() => import('./pages/Product'));
const LazyCart = lazy(() => import('./pages/Cart'));
const LazyLogin = lazy(() => import('./pages/Login'));

class App extends Component {

  componentDidMount() {
    this.props.initData();
  }

  render() {
    return (
      <>
        <Switch>
          <Suspense fallback={<Home/>}>
            <Route path="/" exact component={LazyHome}></Route>
            <Route path="/about" component={LazyAbout}></Route>
            <Route path="/category/:categoryName" component={LazyCategory}></Route>
            <Route path="/products/:categoryName/:productId" component={LazyProduct}></Route>
            <Route path="/cart" component={LazyCart}></Route>
            <Route path="/login" component={LazyLogin}></Route>
          </Suspense>
          <Route component={PageNotFound}></Route>
        </Switch>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initData: () => dispatch(initUserData())
  }
}

export default connect(null, mapDispatchToProps)(App);
