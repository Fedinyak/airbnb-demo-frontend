import React from "react";
import "flexboxgrid2";
import styled from "styled-components";
import star from "./star.svg";

const Info = styled.div`
  display: flex;
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

const Text = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: #383838;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 20px;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Star = styled.img`
  margin-right: 4px;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Reviews = styled.p`
  font-size: 12px;
  margin-left: 4px;
  margin-top: 0;
  padding-top: 12px;
  line-height: 0;
  color: #383838;
`;

export default props => (
  <div>
    <Img src={props.img} alt="." />
    <Info>
      <Text>
        <b>{props.cost} </b>
        {props.caption}
      </Text>
    </Info>
    <Rating>
      <Star src={star} alt="." />
      <Star src={star} alt="." />
      <Star src={star} alt="." />
      <Star src={star} alt="." />
      <Star src={star} alt="." />
      <Reviews>{props.reviews}</Reviews>
    </Rating>
  </div>
);
