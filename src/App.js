import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/category/:categoryName" component={Category}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
