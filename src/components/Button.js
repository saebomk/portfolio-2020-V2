import React from "react";
import styled from "styled-components";
import { SmallText } from "./styles/TextStyles";

export default function Button(props) {
  const { item } = props;
  return (
    <ButtonWrapper href={item.link}>
      <ButtonItem>
        <img src={item.logo} alt={item.arialabel} />
      </ButtonItem>
    </ButtonWrapper>
  );
}

const ButtonItem = styled(SmallText)`
  display: grid;
  grid-area: HeaderButton;
  grid-template-columns: 24px auto;
  gap: ${(props) => (props.hasTitle ? "10px" : "0px")};
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  transition: 0.5s ease-out;

  :hover {
    opacity: 50%;
    /* background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2); */
  }
`;

const ButtonWrapper = styled.a``;
