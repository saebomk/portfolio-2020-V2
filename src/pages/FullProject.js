import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import Hero from "../components/Hero";
import SectionGroup from "../components/SectionGroup";

export default function FullProject() {
  return (
    <Layout>
      <SEO title="Full Project" />
      <Hero
        title="Redesigning Strategic Sourcing Project"
        logo="/images/animations/fullproject_0_1.svg"
        bgimage="/images/animations/fullproject_0_2.svg"
        duration="3 months"
        role="UX Designer in the team of 1 Product Manager, 15 Engineers,  2 UX Designers, 1 UX Researcher"
        impact="Reduced 20+ page transition, 40+ clickstreams for the feature that can cover 80% of app use cases  • 
        Increased user ratings on simplicity, learnability, and insightfulness • 
        Shared with the broader product team for future feature roadmap"
      />
      <SectionGroup page="fullproject" />
    </Layout>
  );
}
