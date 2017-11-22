import React from "react";
import "flexboxgrid2";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 36px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

const Info = styled.div`
  box-sizing: border-box;
  margin-top: 0;
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
  line-height: 20px;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    margin-top: 6px;
  }
`;

export default props => (
  <Container>
    <Img src={props.img} alt="." />
    <Info>
      <Title>{props.title}</Title>
    </Info>
  </Container>
);
