import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import ListWrapper from "../components/ListWrapper";
import styled from "styled-components";
import { DescriptionText, PageTitle } from "../components/styles/TextStyles";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <IndexHero>
        <IndexHeroTitleGroup>
        <IndexHeroTitle>Hi! I'm Saebom</IndexHeroTitle>
          <IndexHeroDescription>
            A UX designer invested in creating innovative products helping users make better business decisions. Currently at <a href="https://www.mulesoft.com/">Salesforce MuleSoft</a>, 
            previously at <a href="https://www.sap.com/">SAP</a>.
          </IndexHeroDescription>
          <IndexHeroDescription>
            My background in Human Computer Interaction and Multimedia Design made me adept in rapid prototyping, passionate in research, and always curious for new technology.
          </IndexHeroDescription>
          <IndexHeroDescription>
          Extroverted introvert, Living in SF enjoying <span role="img" aria-label="running">🏃‍♀️</span> <span role="img" aria-label="dancing">💃</span> <span role="img" aria-label="crossfit">🏋️‍♀️</span> and <span role="img" aria-label="coding">👩‍💻</span> <span role="img" aria-label="coffee">☕</span> <span role="img" aria-label="reading">📚</span> .
          </IndexHeroDescription>
        </IndexHeroTitleGroup>
      </IndexHero>
      <ListWrapper />
    </Layout>
  );
}

const IndexHero = styled.div`
height: '100vh';
max-height : '100vh';
background-color: #F3FAFF;
  display: grid;
  padding: 200px 0;
  margin: 0 auto;
  @media (max-width: 480px) {
    padding: 120px 0 80px 0;
  }
`;

const IndexHeroTitleGroup = styled.div`
  max-width: 920px;
  width: 100%;
  @media (max-width: 920px) {
    padding: 32px;
  }
`;

const IndexHeroTitle = styled(PageTitle)`
  animation: HeroAnimation 3s 0s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 32px 0;
  font-size: 48px;
  line-height: 1.2;

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
  max-width : 320px;
  animation: HeroAnimation 3s 0s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  font-size: 15px;
  line-height: 1.5;

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
