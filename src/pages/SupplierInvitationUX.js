import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import Hero from "../components/Hero";
import SectionGroup from "../components/SectionGroup";

export default function PatternLibrary() {
  return (
    <Layout>
      <SEO title="Supplier Invitation UX" />
      <Hero
        title="Supplier Invitation UX"
        logo="/images/animations/supplierinvitationux_0_1.svg"
        bgimage="/images/animations/supplierinvitationux_0_2.svg"
        duration="6 months"
        role="Lead UX Designer in the team of 9 contributing UX Designers, 2 front-end developers, 2 product designers"
        impact="Created and managed app design pattern designers can reuse via Sketch / InVision  •
        Converted all Sourcing-wide design pattern into Figma library (1 month) and shared Figma onboarding guidelines for designers  •
        Held weekly sync-up for components and design implementation with developers and product managers (6 months) and shared interactive mocks"
      />
      <SectionGroup page="supplierInvitationUX" />
    </Layout>
  );
}
