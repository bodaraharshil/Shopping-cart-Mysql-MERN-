import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import  { Provider }  from "react-redux";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Product from "./pages/product/product";
import Category from "./pages/category/category";
import store from './store/store';
import Order from "./pages/order/order";
import Addproduct from "./pages/product/component/addproduct";
import Addcatedory from './pages/category/component/addcategory';
import Login from './pages/login';
import User from './pages/user';

const Routing = () => {
  const history = useHistory();

  useEffect(()=>{
    const jwt=localStorage.getItem("jwt")
    if(!jwt)
    {
      history.push("/login");    
    }
  })

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/addproduct">
          <Addproduct />
        </Route>
        <Route path="/addcategory">
          <Addcatedory />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
