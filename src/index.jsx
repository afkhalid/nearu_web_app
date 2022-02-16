import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import HomePage from "./home_page";
import 'bootstrap/dist/css/bootstrap.min.css';

import ScanPage from "./scan";
import CallbackPage from "./callback";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div className="content">
      <Route path="/" exact component={() => <HomePage />} />
      <Route path="/scan.html" exact component={(props) => <ScanPage {...props} />} />
      <Route path="/callback.html" exact component={(props) => <CallbackPage {...props} />} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
