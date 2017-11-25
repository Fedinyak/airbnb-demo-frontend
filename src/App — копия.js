import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import styled from "styled-components";
import "./App.css";

/*
import Header from "./Landing/Header";
import Explore from "./Landing/Explore";
import Experiences from "./Landing/Experiences";
import Homes from "./Landing/Homes";
import Popular from "./Landing/Popular";
import Featured from "./Landing/Featured";
import Footer from "./Landing/Footer";
*/
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <div>
        <Homes />
      </div>
      /*   <div>
        <Header />
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
        <Footer />
      </div>*/
    );
  }
}

export default App;
