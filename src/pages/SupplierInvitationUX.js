import React, { useRef } from 'react'
import Link from 'gatsby-link'
import ProjectHero from '../components/ProjectHero';
import Section from '../components/Section';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';


const SupplierInvitationUX = () => (

  <div className="ProjectSlide">
      
    <ProjectHero
      logo="../../SupplierInvitationUX_0_1.png"
      title="Supplier Invitation UX"
      date="3 months"
      role="Lead UX Designer in the team of 1 Product Manager, 10 Engineers, 1 UX Design Intern, 1 UX Researcher, 3 Data Scientists"
      impact="Led the user research sessions and provided the user insights for the data science team to refine the recommendation parameters, Designed Sidebar Page Chooser pattern that can be used in supplier/document/item search in the app, Shared Sourcing use cases in supplier search & invitation flow and designs for sidebar search results with broader Ariba apps design framework team"
    />

    <Section
      logo=""
      title="Background"
      subtitle=""
      text="Selecting and shortlisting suppliers in sourcing events is a big part of the sourcing projects through a comprehensive analysis of existing suppliers as well as discovery research on the new supply market. Oftentimes, an organization can have a supplier segmentation and selection criteria that the sourcing manager can follow, but everything has to be manual and repetitive in the current solution. The team wants to revamp the supplier search & chooser UX so the experience can be more efficient and smart for sourcing managers."
    />

    <Section
      logo=""
      title="Problem"
      subtitle=""
      text="We want to reduce the time that sourcing managers manually search for organizations and contacts for the invitation."
    />

    <Section
      logo="../../SupplierInvitationUX_1.png"
      title="Research"
      subtitle="Flow"
      text="There was already numerous customer feedback asking about enhancing the poor search results in supplier invitation. Therefore, I collected user feedback to identify what are the most common parameters for the search. Meanwhile, we collaborated with the data science team to come up with the use cases where recommendations can be useful. As a result, I came up with 2 refined user stories that can use recommendations and search."
    />

    <Section
      logo="../../SupplierInvitationUX_2.gif"
      title="Design"
      subtitle="For simple events"
      text="Users can see recommendations in zero state table"
    />

    <Section
      logo="../../SupplierInvitationUX_3.gif"
      title="Design"
      subtitle="For complex events"
      text="Users can see recommendations based on items and the reasons based on previous engagement history and supplier statuses"
    />

    <Section
      logo="../../SupplierInvitationUX_4.png"
      title="For search"
      subtitle=""
      text="If user wants to find a specific supplier with the organization or contact informatioon, they can go to Advanced search chooser with supplier filters"
    />

<Section
      logo="../../SupplierInvitationUX_5.png"
      title="Test"
      subtitle=""
      text="Especially for item-level supplier recommendations, I tested the prototypes with 5 participants (indirect sourcing managers, sourcing specialists). "
    />

<Section
      logo="../../SupplierInvitationUX_6.png"
      title="Component building"
      subtitle="Make the Common Component Reusable"
      text="Supplier search & selection UX is not only the case for Sourcing but also a very common pattern for other buying apps. I shared the use cases and designs with the Supplier Management app, Contracts, and Buying app designers to come up with 3 design patterns that designers can use across the apps."
    />

<Section
      logo=""
      title="Lessons Learned"
      subtitle=""
      text="The pattern library's impact can be limited without understanding the full use cases, spend good time to research on components and their variations. It's always good to keep up with the latest consumer UI trend but don't forget you are dealing with enterprise product, maybe you are cutting out possible use cases. While consistency is the key of seamless enterprise UX, my product persona's use cases could be varied from the usual cases."
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

export default SupplierInvitationUX
