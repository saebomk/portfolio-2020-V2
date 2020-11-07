import React, { useRef } from 'react'
import Link from 'gatsby-link'
import ProjectHero from '../components/ProjectHero';
import Section from '../components/Section';
// import { FaInstagram } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
// import { FaRegEnvelope } from 'react-icons/fa';


const FullProject = () => (

  <div className="ProjectSlide">
    <ProjectHero
      logo="../../Full_Project_0_1.png"
      title="Redesigning Strategic Sourcing Project"
      date="3 months"
      role="UX Designer in the team of 1 Product Manager, 15 Engineers, 1 UX Researcher"
      impact="Reduced 20+ page transition, 40+ clickstreams for the feature that can cover 80% of app use cases, Increased user ratings on simplicity, learnability, and insightfulness, Shared with the broader product team for future feature roadmap"
    />

      <p className="Warning">The project is still under NDA. The designs presented below are part of mid-fi prototypes that are used for user testing and could be different from the final design.</p>

    <Section
      logo="../../Full_Project_3.png"
      title="Background"
      subtitle="Complete the Cycle for Sourcing"
      text="Strategic sourcing project is a fundamental cyclic process for sourcing managers, from identifying the current category spend, analyzing the market, strategizing the plan, running sourcing events, and benchmarking for the next cycle. I was tasked to redesign SAP Ariba Sourcing project, which is a workspace that users can collaborate with internal stakeholders via task and document managing functionalities."
    />

    <Section
      logo="../../Full_Project_6.png"
      title="Kick Off"
      subtitle="Scope Based on Priority"
      text="After the project started, I immediately realized the pretty-overwhelming flexibility of sourcing projects and their data. I first created the current interaction map by following some of the real user templates, the best practices, and previous design thinking workshop results, to understand each and every functionality in the project. After that, I discussed with product managers to scope out the first design phase by their priorities."
    />

    <Section
      logo="../../Full_Project_2.png"
      title="Research"
      subtitle="Understand the Key Use Cases and Problems"
      text="We conducted a multi-methodology research effort to better understand the user's core goals and needs. For each research method, we set the specific research questions that we want to get answers from. I organized meaningful findings in a spreadsheet based on features and consolidated the analysis with recommendations, UX values, and UX priority ratings."
    />

    <Section
      logo="../../Full_Project_1.png"
      title="Define"
      subtitle="Multi-Persona User Flow"
      text="From the research, we defined three personas and the flows that could be the most impactful. Along with the task flows, I identified and refined 5 more specific user flows based on the workflow (which objects are used) and ownership (who creates/performs the task)."
    />

    <Section
      logo="../../Full_Project_4.png"
      title="UX Values"
      subtitle="Set Measurable Goals"
      text="While we analyzed the findings, we tried mapping out the findings with the general UX goals and measurable metrics. The 3 values that got the most number of votes are set as the main UX values of the project: Simplicity, learnability, and Insightfulness. This helped us to have clear goals and generate the solution that meets the values."
    />

    <Section
      logo="../../Full_Project_5.png"
      title="Design Highlight 1"
      subtitle="Easy Task Assignment"
      text="Sourcing manager John creates a new sourcing project. He can immediately check the overall templated tasks and start to assign the tasks for the team with recommendations based on the previous projects."
    />

    <Section
      logo="../../Full_Project_8.gif"
      title="Design Highlight 2"
      subtitle="Dynamic View Configuration of Tasks"
      text="Supplier manager Jane is a part of the project team and needs to closely collaborate with sourcing managers. She checks the Kanban view with filters where she can see what are the immediate tasks and their dues."
    />

    <Section
      logo="../../Full_Project_7.gif"
      title="Design Highlight 3"
      subtitle="Contextual Project Widgets"
      text="John checks the progress of the project and see if there are any outstanding tasks or documents he needs to take care of. The widget content is contextual based on the project stages so it can be helpful for his weekly reporting and also future benchmarking."
    />


    <Section
      logo=""
      title="Outcome"
      subtitle="Completing Design Cycle in Pandemic"
      text="We got overall positive feedback from 16+ usability testings with sourcing managers and sourcing specialists. This project has been commented as 'an exemplary project' that completes the full design cycle within a broader product design team. • I could also collaborate with the SAP Design team to share the use cases to make alignment with Fiori 3 components for consistency. We delivered 2 versions of mockups (short-term and long-term) that can align with the design system. • Personally, I worked remotely for 90% of the project due to the pandemic, and this was a great opportunity to learn how to effectively collaborate with the team. (Thankfully, we were able to work on Figma and that immensely helped to feel the presence) Visualizing, and preparing visual aid for meetings helped me the most."
    />

    <div className="Footer">
      <div className="FooterGroup">

        <div className="copyright"><p>Designed & Developed by<br /> Saebom April Kwon with React</p></div>
        <div className="facebook"><a href="https://kr.linkedin.com/in/saebomkwon" aria-label="Go to Linkedin Profile">LinkedIn</a></div>
        <div className="instagram"><a href="https://www.instagram.com/aprilsbkwon/" aria-label="Go to Instagram Profile">Instagram</a></div>
        <div className="email"><a mailto="saebom@umich.edu" aria-label="Send email">Email</a></div>
      </div>
    </div>
  </div>
)

export default FullProject
