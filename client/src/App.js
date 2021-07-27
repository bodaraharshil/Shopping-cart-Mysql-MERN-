import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/home";
import Productlist from "./pages/productlist/productlist";
import Abouts from "./pages/abouts";
import Contact from "./pages/contact";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Productdetail from "./pages/productlist/productdetail";
import List from "./pages/productlist/list";
import Cart from "./pages/cart";
import Payment from './pages/payment';

const Routing = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/abouts">
          <Abouts />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/productlist">
          <Productlist />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/productdetail">
          <Productdetail />
        </Route>
        <Route path="/list/:type">
          <List />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
