import React from "react";
import "flexboxgrid2";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import Filters from "./Filters";
import Card from "./Card";
import GoogleMapReact from "google-map-react";
import Pagination from "./Pagination";

import dreamyImg from "./dreamy.png";
import laSalImg from "./laSal.png";
import youImg from "./you.png";
import oldTownImg from "./oldTown.png";
import lussuosoImg from "./lussuoso.png";
import inTheHistImg from "./inTheHist.png";

export const GoogleMap = props => (
  <GoogleMapReact defaultCenter={props.center} defaultZoom={props.zoom} />
);

const MapContainer = styled.div`
  position: fixed;
  top: 136px;
  right: 0;
  height: 100%;
  width: 100%;
  left: 65%;
  margin-left: 16px;
`;

const CardWrap = styled.div`
  margin-top: 83px;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 6px;
  }
`;

export default function() {
  return (
    <div>
      <Header />
      <Filters />
      <Route path="/homes" />
      <div className="hidden-xs hidden-sm hidden-md col-lg-4 ">
        <MapContainer>
          <GoogleMap center={{ lat: 54.26, lng: 51.53 }} zoom={4} />
        </MapContainer>
      </div>
      <CardWrap className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card
              img={laSalImg}
              title="$82 La Salentina, see, nature & relax"
              caption="Entire house  ·  9 beds"
              reviews="97 · Superhost"
            />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card
              img={youImg}
              title="$82 Your private 3 bedr. riad and exclusi…"
              caption="Entire house  ·  5 beds"
              reviews="161 · Superhost"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card
              img={dreamyImg}
              title="$200 Dreamy Tropical Tree House"
              caption="Entire treehouse  ·  1 bed"
              reviews="364 · Superhost"
            />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card
              img={oldTownImg}
              title="$110 Best location old town luxury loft"
              caption="Entrie apartment  ·  1 bed"
              reviews="369 · Superhost"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card
              img={lussuosoImg}
              title="$83 Lussuoso. Vista incantevole."
              caption="Entrie apartment  ·  6 bed"
              reviews="105 · Superhost"
            />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card
              img={inTheHistImg}
              title="$72 In the historical center of Lecce"
              caption="Entrie house  ·  3 bed"
              reviews="221 · Superhost"
            />
          </div>
        </div>
      </CardWrap>
      <Pagination />
    </div>
  );
}
