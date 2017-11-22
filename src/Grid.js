import React, { Component } from "react";
import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  overflow: scroll;

  @media only screen and (min-width: 576px) {
    width: 560px;
  }

  @media only screen and (min-width: 768px) {
    width: 752px;
  }

  @media only screen and (min-width: 992px) {
    width: 976px;
  }

  @media only screen and (min-width: 1200px) {
    width: 1184px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media only screen and (min-width: 576px) {
    width: 944px;
    max-width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 976px;
    max-width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 1184px;
    max-width: 100%;
  }
`;
