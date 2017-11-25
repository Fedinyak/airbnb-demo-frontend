import React from "react";
import "flexboxgrid2";
import styled from "styled-components";

const Info = styled.div`
  box-sizing: border-box;
  margin-top: 6px;
  @media only screen and (min-width: 768px) {
  }
`;

const Img = styled.img`
  width: 100%;
  @media only screen and (min-width: 768px) {
  }
`;

const Title = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: #383838;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 24px;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 6px;
  }
`;

const Caption = styled.p`
  text-transform: uppercase;
  font-size: 8px;
  font-weight: 700;
  color: #383838;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: 10px;
    margin-top: 8px;
  }
`;

const CostWrap = styled.div`
  display: flex;
  margin-top: 0;
  padding-top: 0;
  @media only screen and (min-width: 768px) {
  }
`;

const Cost = styled.p`
  margin-top: 0;
  padding-top: 10px;
  font-size: 12px;
  color: #383838;
  font-weight: 300;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export default props => (
  <div>
    <Img src={props.img} alt="." />
    <Info>
      <Caption>{props.caption}</Caption>
      <Title>{props.title}</Title>
    </Info>
    <CostWrap>
      <Cost>{props.cost}</Cost>
    </CostWrap>
  </div>
);
