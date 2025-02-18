import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/";
import ClientForm from "./components/ClientForm";
import FreelanceForm from "./components/FreelanceForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    <ClientForm />
    <FreelanceForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
