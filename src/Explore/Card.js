import React from "react";
import "flexboxgrid2";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid rgb(230, 230, 230);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 74px;
    align-items: center;
  }
`;

const Img = styled.img`
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 0;
    height: 72px;
    width: 96px;
  }
`;

const Text = styled.p`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #383838;
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    margin-left: 24px;
  }
`;

export default props => (
  <Card>
    <Img src={props.img} alt="logo" />
    <Text>{props.text}</Text>
  </Card>
);
