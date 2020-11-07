import React, { useRef } from 'react'
import Link from 'gatsby-link'
import ProjectHero from '../components/ProjectHero';
import Section from '../components/Section';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';


const PatternLibrary = () => (

  <div className="ProjectSlide">
      
    <ProjectHero
      logo="../../PatternLibrary_0_1.png"
      title="How I Created Team Design Pattern Library"
      date="6 months"
      role="Lead UX Designer in the team of 9 contributing UX Designers, 2 front-end developers, 2 product designers"
      impact="Created and managed app design pattern designers can reuse via Sketch / InVision, Converted all Sourcing-wide design pattern into Figma library (1 month) and shared Figma onboarding guidelines for designers, Held weekly sync-up for components and design implementation with developers and product managers (6 months) and shared interactive mocks"
    />

    <Section
      logo=""
      title="Background"
      subtitle="Call for Consistent Design"
      text="When I first came to the Sourcing design team, all the apps teams worked in silos having different design patterns and guidelines. As a part of the SAP IES initiative for UX consistency, our team was one of few teams in Ariba who could start adopting the SAP Fiori design system early on for the guided beta of the redesigned app. I created a Sketch team design pattern library (which later I converted to Figma as well) so designers can share their design patterns and make the app-wide design consistent. It also can help avoid inefficiencies in development and lack of clarity when there are new team members get on board the team."
    />

    <Section
      logo=""
      title="Project Journey 1"
      subtitle="Collecting bottom-up patterns"
      text="I started out reaching out to all team designers to collect all the components and their use cases in the app. We held two design critique sessions every week where designers can freely share their designs and discuss the pattern usage and its scalability before signing off to developers. I documented all new updates, open issues, and implementation status in the library."
    />

    <Section
      logo="../../PatternLibrary_1.gif"
      title="Project Journey 2"
      subtitle="Collaborating with Developers"
      text="I worked closely with developers to discuss the specs and make sure the design is implemented correctly. We had weekly sync up with developers to discuss new components and the development statuses. One clear demo could be way more effective than the spec with lengthy descriptions. For instance, I created a Javascript animation demo using SAP Fundamentals Angular components to show sticky behavior for page, section, and table headers."
    />

    <Section
      logo="../../PatternLibrary_3.png"
      title="Project Journey 3"
      subtitle="Migrating to Figma"
      text="Meanwhile, there was an organization-wide change that all SAP design teams migrating to Figma. We were one of the first waves that migrated our team design library to Figma as soon as we onboarded. The goal for Figma migration was to create the pattern as flexible as possible utilizing new features such as auto-layout and frames. With one design intern, I listed out all in-development patterns and their variations. The full migration took 1 month and updated upon new projects. I also created a quick guide for Figma so new designers in Figma can take a look (with cute mini tutorials!)"
    />

    <Section
      logo="../../PatternLibrary_4.png"
      title="Project Journey 4"
      subtitle="Aligning with Design System"
      text="There is still an ongoing team effort to make UX consistency across different products. I shared the team library with the broader Apps design framework team to share Sourcing use cases and our design rationales. In the meantime, I created Sourcing - Fiori Index that designers can see and compare the design, development status in both Sourcing native and Fiori components so designers can decide on what components to use. Here are the completed design patterns in Figma."
    />

    <Section
      logo=""
      title="Lessons Learned"
      subtitle=""
      text="The pattern library's impact can be limited without understanding the full use cases, spend good time to research on components and their variations. • It's always good to keep up with the latest consumer UI trend but don't forget you are dealing with enterprise product, maybe you are cutting out possible use cases. • While consistency is the key of seamless enterprise UX, my product persona's use cases could be varied from the usual cases."
    />

    <div className="Footer">
      <div className="FooterGroup">

        <div className="copyright"><p>Designed & Developed by<br /> Saebom April Kwon with React</p></div>
        <div className="facebook"><a href="https://kr.linkedin.com/in/saebomkwon" aria-label="Go to Linkedin Profile"><FaLinkedin color="black" fontSize="24px" /></a></div>
        <div className="instagram"><a href="https://www.instagram.com/aprilsbkwon/" aria-label="Go to Instagram Profile"><FaInstagram color="black" fontSize="24px" /></a></div>
        <div className="email"><a mailto="saebom@umich.edu" aria-label="Send email"><FaRegEnvelope color="black" fontSize="24px" /></a></div>
      </div>
    </div>
  </div>
)

export default PatternLibrary
