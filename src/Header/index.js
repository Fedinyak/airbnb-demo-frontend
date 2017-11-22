import React from "react";
import styled from "styled-components";
import Search from "./Search.js";
import "../App.css";
import airlogo from "./airbnb-logo.svg";
import arrow from "./arrowDown.png";

const Header = styled.div`
  position: fixed;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid rgb(210, 210, 210);
  box-sizing: border-box;
  top: 0;
  right: 0;
  left: 0;
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

const Link = styled.a`
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

const Line = styled.div`
  background: rgb(210, 210, 210);
  height: 1px;
  margin-top: 16px;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <HeaderWrap>
          <LogoWrap>
            <img src={airlogo} className="Airlogo" alt="airbnb-logo" />
            <div className="hidden-lg">
              <ArrowImg src={arrow} />
            </div>
          </LogoWrap>
          <div className="col-xs-10  col-sm-7 col-lg-5">
            <Search />
          </div>

          <nav className="hidden-xs hidden-sm hidden-md col-md-offset-2 col-md-4">
            <Link href="#">Become a host</Link>
            <Link href="#">Help</Link>
            <Link href="#">Sign Up</Link>
            <Link href="#">Log In</Link>
          </nav>
        </HeaderWrap>
      </div>
    </Header>
  );
}
