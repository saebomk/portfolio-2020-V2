import React from "react";
import styled from "styled-components";
import { FooterItemData } from "../data/FooterItemData";
import Button from "./Button";
import { HeaderText } from "./styles/TextStyles";

export default function Footer() {
  return (
    <FooterWrapper>
      <Copyright>by Saebom Kwon with React</Copyright>
      <FooterItemWrapper>
        {FooterItemData.map((item, index) => (
          <Button item={item} key={index} />
        ))}
      </FooterItemWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 52px;
  margin: 0 auto;
  align-items: center;
`;
const Copyright = styled(HeaderText)`
  display: flex;
  padding: 32px;
`;

const FooterItemWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;
