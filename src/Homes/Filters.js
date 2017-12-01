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

const Dates = styled.div`
  position: absolute;
  background: red;
  margin-top: 54px;
  height: 300px;
  width: 300px;
`;

export default class Dropdown extends React.Component {
  state = {
    isOpen: false,
    isCheckIn: true
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({ isCheckIn: !this.state.isCheckIn });
  };

  handleClick() {
    this.setState(prevState => ({
      isCheckIn: !prevState.isCheckIn
    }));
  }

  //export default class Dates extends React.Component {
  //  constructor(props) {
  //   super(props);
  //  this.state = { isDatesOn: true };

  // This binding is necessary to make `this` work in the callback
  //  this.handleClick = this.handleClick.bind(this);
  // }

  //  handleClick() {
  //   this.setState(prevState => ({
  //    isDatesOn: !prevState.isDatesOn
  //  }));
  // }

  render() {
    return (
      <div>
        <Filters>
          <div className="container">
            <Button onClick={this.toggleOpen}>
              {this.state.isCheckIn ? "Dates" : "Check in — Check out"}
            </Button>
            <Button>Guests</Button>
            <Button className="hidden-xs hidden-sm hidden-md">Room type</Button>
            <Button className="hidden-xs hidden-sm hidden-md">Price</Button>
            <Button className="hidden-xs hidden-sm hidden-md">
              Instant book
            </Button>
            <Button>More filters</Button>
          </div>
        </Filters>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {this.state.isOpen && <Dates>My Content</Dates>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
