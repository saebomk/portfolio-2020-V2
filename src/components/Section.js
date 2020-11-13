import React from "react";
import styled from "styled-components";
import { BodyText, HeaderText, Title } from "./styles/TextStyles";

export default function Section(props) {
  const { item } = props;

  // var Animation;
  // if (item.animation === "FullProjectBackground") {
  //   Animation = <FullProjectBackground />;
  // } else {
  //   Animation = <SectionImage src={item.diagram} alt={item.arialabel} />;
  // }

  return (
    <SectionWrapper>
      <SectionTitleWrapper>
        {item.title ? <SectionTitle>{item.title}</SectionTitle> : null}
        {item.subtitle ? (
          <SectionSubtitle>{item.subtitle}</SectionSubtitle>
        ) : null}
        {item.description ? (
          <SectionDescription>{item.description}</SectionDescription>
        ) : null}
      </SectionTitleWrapper>
      <SectionImageWrapper>
        {item.diagram ? (
          <SectionImage src={item.diagram} alt={item.arialabel} />
        ) : null}
      </SectionImageWrapper>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  position: relative;
  padding: 72px 32px;
  height: 100%;
  display: grid;
  justify-content: center;
  &:nth-child(even) {
    background: #fafafa;
  }
`;

const SectionTitleWrapper = styled.div`
  /* display: grid;
  justify-content: center; */
`;

const SectionTitle = styled(HeaderText)`
  line-height: 2;
`;

const SectionSubtitle = styled(Title)`
  line-height: 2;
`;

const SectionDescription = styled(BodyText)`
  padding: 16px 0 0 0;
  line-height: 1.5;
  max-width: 700px;
`;

const SectionImageWrapper = styled.div`
  display: block;
  position: relative;
  /* height: 100%; */
  padding: 48px 0 0 0;
  width: 100%;
`;

const SectionImage = styled.img`
  align-self: center;
  max-width: 920px;
  height: auto;
  object-fit: fill;
  /* margin-left: auto;
  margin-right: auto; */
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
