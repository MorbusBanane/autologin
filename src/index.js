import React            from "react";
import ReactDOM         from "react-dom";
import "./index.css";

import {Route}          from 'react-router-dom'
import {BrowserRouter}  from 'react-router-dom'

import App              from "./components/app/App";

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>
  , document.getElementById('root')
);
