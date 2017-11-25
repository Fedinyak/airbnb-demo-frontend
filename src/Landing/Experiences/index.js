import React from "react";
import "flexboxgrid2";
import forestImg from "./forestTherapy.png";
import whaleWatchingImg from "./whaleWatching.png";
import tableMountainImg from "./tableMountain.png";
import salsaNightImg from "./salsaNight.png";
import rightArrowImg from "./rightArrow.svg";
import button from "./nextPage.svg";
import styled from "styled-components";
import Card from "./Card";
import { Container, Row } from "../../Grid";

const TitleWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #383838;
  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const SeeAll = styled.p`
  font-size: 14px;
  color: #383838;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const Slider = styled.div`position: relative;`;

const Button = styled.a`
  position: absolute;
  display: none;
  @media only screen and (min-width: 992px) {
    display: block;
    top: 150px;
    right: -25px;
  }
  @media only screen and (min-width: 1200px) {
    top: 190px;
  }
`;

const Img = styled.img`margin-left: 8px;`;

export default function() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <TitleWrap className="experiences-title">
              <Title>Experiences</Title>
              <SeeAll>
                See all<Img src={rightArrowImg} />
              </SeeAll>
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
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              img={forestImg}
              cost="$29"
              caption="Forest therapy"
              reviews="44 reviews"
            />
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              img={whaleWatchingImg}
              cost="$69"
              caption="Whale watching"
              reviews="46 reviews"
            />
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              img={tableMountainImg}
              cost="$69"
              caption="Table Mountain Summit, Cable Car Down"
              reviews="44 reviews"
            />
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              img={salsaNightImg}
              cost="$50"
              caption="Salsa Night"
              reviews="44 reviews"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
}
