import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
   <BrowserRouter>
      <App tab="home" /> 
    </BrowserRouter>
  </Provider>
);
