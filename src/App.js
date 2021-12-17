import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import OrderForm from "./Components/OrderForm";
import HomePage from "./Components/HomePage";
import axios from "axios";
import { GlobalStyle } from "./Styles/GlobalStyle";

const initialFormValues = {
  userName: "",
  size: "",
  cheese: false,
  pepperoni: false,
  mushrooms: false,
  canadianBacon: false,
  pineapple: false,
  special: "",
};

const initialFormErrors = {
  userName: "",
  size: "",
  special: "",
};

const initialOrder = [];
const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getOrders = () => {
    axios
      .get("https://reqres.in/api/orders")
      .then((res) => {
        setOrders(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const postNewOrders = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/" id="order-pizza">
            Home
          </Link>
          <Link to="/order-pizza" id="pizza-form">
            Order Pizza
          </Link>
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
