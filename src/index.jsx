import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import HomePage from "./home_page";
import 'bootstrap/dist/css/bootstrap.min.css';

import ScanPage from "./scan";
import { BrowserRouter, Route } from "react-router-dom";
import ConfirmationPage from "./confirmation";
import TagNotFoundPage from "./tag_not_found";

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Route path="/" exact component={() => <HomePage />} />
      <Route path="/scan.html" exact component={(props) => <ScanPage {...props} />} />
      <Route path="/confirmation.html" exact component={(props) => <ConfirmationPage {...props} />} />
      <Route path="/tagNotFound.html" exact component={(props) => <TagNotFoundPage {...props} />} />
    </Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
