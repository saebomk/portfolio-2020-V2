import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import ListWrapper from "../components/ListWrapper";
import styled from "styled-components";
import Hero from "../components/Hero";
import { DescriptionText, PageTitle } from "../components/styles/TextStyles";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <IndexHero>
        <IndexHeroTitleGroup>
          <IndexHeroTitle>Saebom April Kwon</IndexHeroTitle>
          <IndexHeroDescription>
            Hello, I am a UX designer passionate in creating simple, usable, and
            inclusive user interfaces.
          </IndexHeroDescription>
        </IndexHeroTitleGroup>
      </IndexHero>
      <ListWrapper />
    </Layout>
  );
}

const IndexHero = styled.div`
  height: 720px;
  display: grid;
  padding: 200px 0;
  margin: 0 auto;
`;

const IndexHeroTitleGroup = styled.div`
  max-width: 920px;
  width: 100%;
  @media (max-width: 920px) {
    padding: 32px;
  }
`;

const IndexHeroTitle = styled(PageTitle)`
  animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 4px 0;

  @keyframes HeroAnimation {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const IndexHeroDescription = styled(DescriptionText)`
  padding: 8px 0;
  animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  font-size: 20px;
  line-height: 1.3;

  @keyframes HeroAnimation {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
