import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import MockApi from "./components/mockApi";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MockApi />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
