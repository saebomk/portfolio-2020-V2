import React from "react";
import styled from "styled-components";
import {
  DescriptionText,
  PageTitle,
  SmallText,
  Subtitle,
} from "./styles/TextStyles";

export default function Hero(props) {
  return (
    <HeroWrapper img={props.bgimage}>
      <HeroTitleWrapper>
        <HeroTitle>{props.title}</HeroTitle>
        <HeroSubtitle>{props.subtitle}</HeroSubtitle>
        <HeroMetaWrapper>
          <HeroMetaDataWrapper>
            <HeroMetaDataTitle>Initial Delivery</HeroMetaDataTitle>
            <HeroDuration>{props.duration}</HeroDuration>
          </HeroMetaDataWrapper>
          <HeroMetaDataWrapper>
            <HeroMetaDataTitle>Role</HeroMetaDataTitle>
            <HeroRole>{props.role}</HeroRole>
          </HeroMetaDataWrapper>
          <HeroMetaDataWrapper>
            <HeroMetaDataTitle>Impact</HeroMetaDataTitle>
            <HeroImpact>{props.impact}</HeroImpact>
          </HeroMetaDataWrapper>
        </HeroMetaWrapper>
        <HeroImageWrapper>
          <HeroImage src={props.logo}></HeroImage>
        </HeroImageWrapper>
      </HeroTitleWrapper>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  height: 100%;
  max-height: 740px;
  margin: 0;
  left: 0;
  top: 0;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 1140px) {
    padding: 0 48px;
    background-size: cover;
    display: block;
  }
  @media (max-width: 640px) {
    padding: 0 32px;
    background-size: cover;
    display: block;
  }
`;

const HeroTitleWrapper = styled.div`
  max-width: 920px;
  padding: 200px 0;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-areas:
    "HeroTitle ."
    "HeroSubtitle ."
    "HeroMetaWrapper HeroImageWrapper";
  @media (max-width: 720px) {
    display: block;
    padding: 100px 0;
  }
`;

const HeroMetaDataWrapper = styled.div`
  grid-area: HeroMetaDataWrapper;
`;

const HeroMetaDataTitle = styled(Subtitle)``;

const HeroTitle = styled(PageTitle)`
  /* color: #fff; */
  grid-area: HeroTitle;
`;

const HeroSubtitle = styled(DescriptionText)`
  /* color: #fff; */
  padding: 16px 0;
  max-width: 600px;
  grid-area: HeroSubtitle;
`;

const HeroMetaWrapper = styled.div`
  grid-area: HeroMetaWrapper;
  display: block;
  padding: 16px 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 24px;
  @media (max-width: 1140px) {
    /* margin: 16px; */
    display: block;
  }
`;

const HeroDuration = styled(SmallText)`
  /* grid-area: HeroDuration; */
  /* color: #fff; */
  padding: 16px 0;
`;

const HeroRole = styled(SmallText)`
  /* grid-area: HeroRole; */
  /* color: #fff; */
  padding: 16px 0;
`;

const HeroImpact = styled(SmallText)`
  /* grid-area: HeroImpact; */
  /* color: #fff; */
  padding: 16px 0;
`;

const HeroImageWrapper = styled.div`
  grid-area: HeroImageWrapper;
`;

const HeroImage = styled.img`
  @media (max-width: 1140px) {
    width: 100%;
  }
`;
