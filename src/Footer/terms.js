import React from "react";
import "flexboxgrid2";
import styled from "styled-components";
import footerLogo from "./footer-logo.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const TermsWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 38px;
    align-items: center;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #636363;

  @media only screen and (min-width: 992px) {
    font-size: 15px;
  }
`;

const FooterLogo = styled.img`
  height: 19px;
  margin-right: 7px;

  @media only screen and (min-width: 768px) {
    height: 24px;
    margin-right: 9px;
    padding-bottom: 2px;
  }
`;

const Terms = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: 8px;

  @media only screen and (min-width: 768px) {
    margin-top: 16px;
  }
`;

const Link = styled.a`
  margin-right: 12px;
  font-size: 12px;
  text-decoration: none;
  color: #636363;

  @media only screen and (min-width: 768px) {
    margin-right: 16px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 15px;
  }
`;

const SocialImg = styled.img`
  margin-right: 8px;
  height: 18px;
  @media only screen and (min-width: 768px) {
    height: 23px;
  }
`;

export default function() {
  return (
    <div>
      <TermsWrap className="row">
        <Copyright className="col-xs-12 col-sm-12 col-md-4">
          <FooterLogo src={footerLogo} /> © Airbnb Inc.
        </Copyright>

        <Terms>
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Site map</Link>
          <SocialImg src={facebook} />
          <SocialImg src={twitter} />
          <SocialImg src={instagram} />
        </Terms>
      </TermsWrap>
    </div>
  );
}
