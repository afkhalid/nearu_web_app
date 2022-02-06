import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import HomePage from "./home_page";
import logo from "./images/logo.png";
import ScanPage from "./scan";
import { BrowserRouter, Route } from "react-router-dom";

const LOGO_SIZE = 192;

ReactDOM.render(
  <BrowserRouter>
    <div className="content">
      <div className="centered">
        <a href="/">
          <img src={logo}
               alt="Bike Rental"
               width={LOGO_SIZE}
               height={LOGO_SIZE} />
        </a>
      </div>
      <Route path="/" exact component={() => <HomePage />} />
      <Route path="/scan.html" exact component={(props) => <ScanPage {...props} />} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
