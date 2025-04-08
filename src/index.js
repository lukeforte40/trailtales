import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './test/react/reportWebVitals';
import { BrowserRouter } from 'react-router';
import Routing from "./Routing";
import Nav from "./components/Nav";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav/>
    <Routing />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
