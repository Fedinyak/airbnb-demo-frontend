import React from "react";
import "flexboxgrid2";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../../Homes/Card";
import { Container, Row } from "../../Grid";
import button from "./nextPage.svg";
import rightArrowImg from "./rightArrow.svg";
import dreamyImg from "./dreamy.png";
import laSalImg from "./laSal.png";
import youImg from "./you.png";

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
    top: 80px;
    right: -25px;
  }
  @media only screen and (min-width: 1200px) {
    top: 105px;
  }
`;

export default function() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <TitleWrap className="experiences-title">
              <Title>Homes</Title>
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
          <div className="col-xs-8 col-md-5 col-lg-4">
            <Link to="/Homes">
              <Card
                img={laSalImg}
                title="$82 La Salentina, see, nature & relax"
                caption="Entire house  ·  9 beds"
                reviews="97 · Superhost"
              />
            </Link>
          </div>
          <div className="col-xs-8 col-md-5 col-lg-4">
            {" "}
            <Link to="/Homes">
              <Card
                img={youImg}
                title="$82 Your private 3 bedr. riad and exclusi…"
                caption="Entire house  ·  5 beds"
                reviews="161 · Superhost"
              />
            </Link>
          </div>
          <div className="col-xs-8 col-md-5 col-lg-4">
            {" "}
            <Link to="/Homes">
              <Card
                img={dreamyImg}
                title="$200 Dreamy Tropical Tree House"
                caption="Entire treehouse  ·  1 bed"
                reviews="364 · Superhost"
              />
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}
