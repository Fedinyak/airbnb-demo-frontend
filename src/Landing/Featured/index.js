import React from "react";
import "flexboxgrid2";
import styled from "styled-components";
import Card from "./Card";
import { Container, Row } from "../../Grid";
import button from "./nextPage.svg";
import parisImg from "./paris.png";
import miamiImg from "./miami.png";
import tokyoImg from "./tokyo.png";
import capeImg from "./cape.png";
import seoulImg from "./seoul.png";
import laImg from "./la.png";

const TitleWrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #383838;
  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const Slider = styled.div`position: relative;`;

const Button = styled.a`
  position: absolute;
  display: none;
  @media only screen and (min-width: 992px) {
    display: block;
    top: 90px;
    right: -25px;
  }
  @media only screen and (min-width: 1200px) {
    top: 115px;
  }
`;

export default function() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <TitleWrap className="experiences-title">
              <Title>Featured destinations</Title>
            </TitleWrap>
            <Slider>
              <Button href="#">
                <img src={button} />
              </Button>
            </Slider>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={parisImg} title="Paris" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={miamiImg} title="Miami" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={tokyoImg} title="Tokyo" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={capeImg} title="Tokyo" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={seoulImg} title="Tokyo" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={laImg} title="Tokyo" />
          </div>
        </Row>
      </Container>
    </div>
  );
}
