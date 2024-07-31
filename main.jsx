import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import UserProvider from "./context/UserContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
