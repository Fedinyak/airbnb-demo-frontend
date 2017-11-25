import React from "react";
import styled from "styled-components";
import Search from "./Search.js";
import "../App.css";
import airlogo from "./airbnb-logo.svg";
import arrow from "./arrowDown.png";
import { Link } from "react-router-dom";

const Header = styled.div`
  position: fixed;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid rgb(210, 210, 210);
  box-sizing: border-box;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

const NavLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  padding-left: 20px;
  color: #383838;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 992px) {
    margin-right: 5%;
  }
`;

const ArrowImg = styled.img`
  width: 10px;
  height: 5px;
  margin-right: 8px;
  margin-left: 4px;

  @media only screen and (min-width: 768px) {
    margin-right: 16px;
    margin-left: 10px;
  }
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <HeaderWrap>
          <LogoWrap>
            <Link to="/">
              <img src={airlogo} className="Airlogo" alt="airbnb-logo" />
            </Link>
            <div className="hidden-lg hidden-xl">
              <ArrowImg src={arrow} />
            </div>
          </LogoWrap>

          <div className="col-xs-10  col-sm-7 col-lg-5">
            <Search />
          </div>

          <nav className="hidden-xs hidden-sm hidden-md col-md-offset-2 col-md-4">
            <NavLink href="#">Become a host</NavLink>
            <NavLink href="#">Help</NavLink>
            <NavLink href="#">Sign Up</NavLink>
            <NavLink href="#">Log In</NavLink>
          </nav>
        </HeaderWrap>
      </div>
    </Header>
  );
}
