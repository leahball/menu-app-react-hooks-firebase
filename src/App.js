import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import OrderForm from "./Components/OrderForm";
import HomePage from "./Components/HomePage";
import axios from "axios";
import { GlobalStyle } from "./Styles/GlobalStyle";
import * as yup from "yup";
import formSchema from "./Validation/formSchema";

const initialFormValues = {
  name: "",
  size: "",
  cheese: false,
  pepperoni: false,
  mushrooms: false,
  canadianBacon: false,
  pineapple: false,
  special: "",
};

const initialFormErrors = {
  name: "",
  special: "",
};

const initialOrder = [];
const initialDisabled = true;

function App() {
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

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  };

  const handleSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: [
        "cheese",
        "pepperoni",
        "mushroom",
        "canadianBacon",
        "pineapple",
      ].filter((topping) => !!formValues[topping]),
      special: formValues.special.trim(),
    };
    postNewOrder(newOrder);
  };

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/" id="order-pizza">
            Home
          </Link>
          <Link to="/pizza" id="pizza-form">
            Order Pizza
          </Link>
        </nav>
      </header>
      <GlobalStyle />
      <Route path="/pizza">
        <OrderForm
          formValues={formValues}
          change={handleChange}
          errors={formErrors}
          submit={handleSubmit}
          disabled={disabled}
        />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
