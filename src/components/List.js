import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { DescriptionText, Subtitle, Title } from "./styles/TextStyles";

export default function List(props) {
  const { item } = props;
  return (
    <Link to={item.link}>
      <ListGroup image={item.image}>
        <ListTitleGroup>
          <ListTitle>{item.title}</ListTitle>
          <ListSubtitle>{item.subtitle}</ListSubtitle>
        </ListTitleGroup>
        <ListLogoGroup>
          <ListLogo src={item.thumbnail} />
        </ListLogoGroup>
      </ListGroup>
    </Link>
  );
}

const ListGroup = styled.div`
  height: 160px;
  padding: 0 20% 0 20%;
  display: block;
  position: relative;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  display: grid;
  grid-template-columns: 7fr 3fr;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
    padding: 0;
    height: 100%;
  }

  :hover {
    background: #fafafa; // How can i link to token?
  }
`;

const ListLogoGroup = styled.div`
  height: 160px;
  width: auto;
  margin: 0;
  padding: 0;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

const ListLogo = styled.img`
  align-self: center;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 1440px) {
    width: 100%;
  }
`;

const ListTitleGroup = styled.div`
  justify-self: start;
  display: grid;
  margin: 40px;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
    margin: 32px;
  }
`;

const ListTitle = styled(Subtitle)`
  margin: 0;
`;

const ListSubtitle = styled(DescriptionText)``;
