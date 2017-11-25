import React from "react";
import "flexboxgrid2";
import styled from "styled-components";
import buttonRightImg from "./buttonRight.svg";

const PaginationWrap = styled.div`
  display: flex;
  align-items: center;
`;

const PaginationLoc = styled.div`
  display: flex;
  align-items: center;
  margin-right: 26px;
  background-color: #008489;
  height: 32px;
  width: 32px;
  border-radius: 32px;
`;

const PaginationLocNum = styled.p`
  font-size: 16px;
  color: #ffffff;
  padding-left: 13px;
`;

const Pagination = styled.div`
  margin-right: 38px;
  font-size: 16px;
  color: #008489;
  line-height: 0;
`;

const PaginationBtnRight = styled.div`margin-top: 3px;`;

const Rentals = styled.p`
  font-size: 16px;
  color: #383838;
  margin-bottom: 24px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 38px;
  }
`;

const Taxes = styled.p`
  font-size: 16px;
  color: #636363;
`;

export default function() {
  return (
    <div>
      <div className="container">
        <div className="col-lg-8">
          <div className="center-xs">
            <PaginationWrap className="center-xs">
              <PaginationLoc>
                <PaginationLocNum>1</PaginationLocNum>
              </PaginationLoc>
              <Pagination>2</Pagination>
              <Pagination>3</Pagination>
              <Pagination>...</Pagination>
              <Pagination>17</Pagination>
              <PaginationBtnRight>
                <img src={buttonRightImg} />
              </PaginationBtnRight>
            </PaginationWrap>

            <Rentals>1 – 18 of 300+ Rentals</Rentals>

            <Taxes>
              Enter dates to see full pricing. Additional fees apply. Taxes may
              be added.
            </Taxes>
          </div>
        </div>
      </div>
    </div>
  );
}
