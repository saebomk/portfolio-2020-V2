import React from "react";
import styled from "styled-components";
import { SectionData } from "../data/SectionData";
import Section from "./Section";

export default function SectionGroup(props) {
  const { page } = props;

  return (
    <SectionGroupWrapper count={SectionData[page].length}>
      {SectionData[page].map((item, index) => (
        <Section item={item} key={index} />
      ))}
    </SectionGroupWrapper>
  );
}

const SectionGroupWrapper = styled.div`
  display: block;
  position: relative;
  margin: 0 auto;
  height: 100%;
`;
