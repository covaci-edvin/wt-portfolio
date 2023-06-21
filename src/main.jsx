import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.scss";
import "./styles/variables.css";
import { DataFetchProvider } from "./context/dataFetchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DataFetchProvider>
        <App />
      </DataFetchProvider>
    </Provider>
  </React.StrictMode>
);
