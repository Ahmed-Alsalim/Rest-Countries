import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Navbar from "./components/Navbar";
import { SearchContextProvider } from "./contexts/SearchContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchContextProvider>
    <Navbar />
    <App />
  </SearchContextProvider>
);
