import React from "react";
import "flexboxgrid2";
import styled from "styled-components";
import Card from "./Card";
import { Container, Row } from "../../Grid";
import button from "./nextPage.svg";
import chumleyImg from "./chumley.png";
import hanjanImg from "./hanjan.png";
import primeMeatsImg from "./primeMeats.png";
import seaImg from "./sea.png";
import rightArrowImg from "./rightArrow.svg";

const TitleWrap = styled.div`
  margin-top: 20px;
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

const SeeAll = styled.p`
  font-size: 14px;
  color: #383838;
  display: flex;
  flex-wrap: nowrap;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const Img = styled.img`margin-left: 8px;`;

const Slider = styled.div`position: relative;`;

const Button = styled.a`
  position: absolute;
  display: none;
  @media only screen and (min-width: 992px) {
    display: block;
    top: 60px;
    right: -25px;
  }
  @media only screen and (min-width: 1200px) {
    top: 78px;
  }
`;

export default function() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <TitleWrap className="experiences-title">
              <Title>Popular reservations around the world</Title>
              <SeeAll>
                See&nbsp;all<Img src={rightArrowImg} />
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
              img={chumleyImg}
              caption="Speakeasy"
              title="Chumley’s"
              cost="About $60 per person"
            />
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              img={hanjanImg}
              caption="Korean gastropub"
              title="Hanjan"
              cost="About $50 per person"
            />
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              img={primeMeatsImg}
              caption="German american"
              title="Prime Meats"
              cost="About $55 per person"
            />
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              img={seaImg}
              caption="Fine seafood"
              title="Seaprice"
              cost="About $70 per person"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
}
