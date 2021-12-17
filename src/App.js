import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import OrderForm from "./Components/OrderForm";
import HomePage from "./Components/HomePage";
import axios from "axios";
import { GlobalStyle } from "./Styles/GlobalStyle";

const App = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/orders")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/order-pizza">Order Pizza</Link>
        </nav>
      </header>
      <GlobalStyle />
      <Route path="/order-pizza">
        <OrderForm />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </div>
  );
};

export default App;
