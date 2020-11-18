import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import Hero from "../components/Hero";
import SectionGroup from "../components/SectionGroup";

export default function PatternLibrary() {
  return (
    <Layout>
      <SEO title="Pattern Library" />
      <Hero
        title="How I Created Team Design Pattern"
        logo="/images/animations/patternlibrary_0_1.svg"
        arialabel="Pattern Library Thumbnail"
        bgimage="/images/animations/patternlibrary_0_2.svg"
        duration="6 months"
        role="Lead UX Designer in the team of 9 contributing UX Designers, 2 front-end developers, 2 product designers"
        impact="Delivered fully Fiori-compliant mocks for consistent user experience, improved the productivity by reducing inconsistency and redundant communication •
        Managed app design pattern designers can reuse in Sketch / InVision (total 20 versioning) and Figma with 9 contributors, 40% of the symbols were created from the scrath, increased collaboration between designers with 2 team design reviews per week •
        Held all total 25 weekly cross-functional team sync-ups, shared design specs and interactive mocks"
      />
      <SectionGroup page="patternlibrary" />
    </Layout>
  );
}
