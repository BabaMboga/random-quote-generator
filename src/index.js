import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./slices/quoteSlice";
import thunk  from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

