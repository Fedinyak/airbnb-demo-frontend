import React from "react";
import styled from "styled-components";
import "../App.css";

const Filters = styled.div`
  position: fixed;
  background-color: #ffffff;
  border-bottom: 1px solid rgb(210, 210, 210);
  box-sizing: border-box;
  top: 80px;
  right: 0;
  left: 0;
`;

const Button = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  color: #383838;
  margin-top: 11px;
  margin-bottom: 11px;
  margin-right: 12px;
  padding: 7px 16px;
`;

export default function() {
  return (
    <Filters>
      <div className="container">
        <Button>Dates</Button>
        <Button>Guests</Button>
        <Button className="hidden-xs hidden-sm hidden-md">Room type</Button>
        <Button className="hidden-xs hidden-sm hidden-md">Price</Button>
        <Button className="hidden-xs hidden-sm hidden-md">Instant book</Button>
        <Button>More filters</Button>
      </div>
    </Filters>
  );
}
