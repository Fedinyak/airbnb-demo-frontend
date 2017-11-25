import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import Header from "./Landing/Header";
import Landing from "./Landing";
import Homes from "./Homes";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route path="/" exact component={Landing} />
      <Route path="/homes" component={Homes} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
