import React from "react";
import "flexboxgrid2";
import styled from "styled-components";
import arrowImg from "./arrow.svg";
import Terms from "./terms.js";

const Footer = styled.div`border-top: 1px solid rgb(200, 200, 200);`;

const SelectWrap = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;

const Select = styled.select`
  height: 40px;
  width: 100%;
  outline: none;
  background: url(${arrowImg}) no-repeat 95%;
  color: #383838;
  border: 1px solid rgba(72, 72, 72, 0.2);
  font-size: 12px;
  padding-left: 8px;
  margin-top: 16px;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    height: 50px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 18px;
    padding-left: 16px;
  }
`;

const Option = styled.option``;

const Line = styled.div`
  background: rgb(240, 240, 240);
  height: 1px;
  margin-top: 24px;
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;
    margin-top: 38px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 50px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const NavTitle = styled.h4`
  font-size: 12px;
  color: #383838;
  margin-bottom: 10px;
  @media only screen and (min-width: 992px) {
    font-size: 15px;
  }
`;

const Link = styled.a`
  font-size: 12px;
  margin-top: 13px;
  text-decoration: none;
  color: #636363;
  @media only screen and (min-width: 992px) {
    font-size: 15px;
  }
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <SelectWrap className="row">
              <form className="col-xs-6 col-md-12">
                <Select>
                  <Option>English</Option>
                </Select>
              </form>

              <form className="col-xs-6 col-md-12">
                <Select>
                  <Option>United States dollar</Option>
                </Select>
              </form>
            </SelectWrap>
          </div>

          <div className="hidden-xs hidden-sm col-md-offset-1 col-md-2">
            <Nav>
              <NavTitle>Airbnb</NavTitle>
              <Link href="#">About us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Press</Link>
              <Link href="#">Policies</Link>
              <Link href="#">Help</Link>
              <Link href="#">Diversity & Belongin</Link>
            </Nav>
          </div>
          <div className="hidden-xs hidden-sm col-md-offset-1 col-md-3">
            <Nav>
              <NavTitle>Discover</NavTitle>
              <Link href="#">Trust & Safety</Link>
              <Link href="#">Travel Credit</Link>
              <Link href="#">Gift Cards</Link>
              <Link href="#">Airbnb Citizen</Link>
              <Link href="#">Business Travel</Link>
              <Link href="#">Guidebooks</Link>
              <Link href="#">Airbnbmag</Link>
            </Nav>
          </div>
          <div className="hidden-xs hidden-sm col-md-2">
            <Nav>
              <NavTitle>Hosting</NavTitle>
              <Link href="#">Why Host</Link>
              <Link href="#">Hospitality</Link>
              <Link href="#">Responsible Hosting</Link>
              <Link href="#">Community Center</Link>
            </Nav>
          </div>
        </div>
        <Line />
        <Terms />
      </div>
    </Footer>
  );
}
