import React from "react";
import "flexboxgrid2";
import styled from "styled-components";
import exploreImg from "./homes@2x.png";
import experiencesImg from "./experiences@2x.png";
import restaurantsImg from "./restaurants@2x.png";
import Card from "./Card";
import { Container, Row } from "../../Grid";
import { Link } from "react-router-dom";

const Title = styled.h2`
  font-size: 24px;
  color: #383838;
  margin-top: 44px;
  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export default () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Title>Explore Airbnb</Title>
        </div>
      </div>
    </div>
    <Container>
      <Row>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Link to="/Homes">
            <Card img={exploreImg} text="Homes" />
          </Link>
        </div>

        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card img={experiencesImg} text="Experiences" />
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card img={restaurantsImg} text="Restaurants" />
        </div>
      </Row>
    </Container>
  </div>
);
