import React from "react";
import styled from "styled-components";
import "../App.css";
import searchImg from "./search.svg";

const Search = styled.form`
  display: flex;
  align-items: center;
  color: #383838;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  width: 100%;
  font-size: 14px;
  font-weight: 300;
`;

const Img = styled.img`
  height: 16px;
  padding-top: 15px;
  padding-right: 8px;
  padding-bottom: 15px;
  padding-left: 10px;

  @media only screen and (min-width: 768px) {
    height: 22px;
    padding-top: 13px;
    padding-right: 16px;
    padding-bottom: 13px;
    padding-left: 16px;
  }
`;

const Input = styled.input`
  border: 0;
  font-weight: 300;
  font-size: 14px;
  color: #383838;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export default function() {
  return (
    <Search>
      <Img src={searchImg} />
      <Input placeholder="Anywhere  ·  Homes" value="Anywhere  ·  Homes" />
    </Search>
  );
}
