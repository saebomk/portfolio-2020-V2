import React, { useRef } from 'react'
import ProjectHero from '../components/ProjectHero';
import Section from '../components/Section';
// import { FaInstagram } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
// import { FaRegEnvelope } from 'react-icons/fa';


const ConditionBuilder = () => (

  <div className="ProjectSlide">
      
    <ProjectHero
      logo="../../ConditionBuilder_0_1.png"
      title="Visibility Condition Builder UI"
      date="1 month"
      role="Lead UX Designer in the team of 1 Product Manager, 5 Engineers, 1 UX Designer, 1 UX Engineer"
      impact="Delivered full interaction UX/UI spec for condition manager and condition builder with enhancement in required clicks for creating complex expressions"
    />

    <Section
      logo="../../ConditionBuilder_1.png"
      title="Background"
      subtitle=""
      text="Often sourcing managers want to add questions or content that are visible only when the supplier responded with a certain answer. For instance, a sourcing event template would show additional compliance requirement materials for only who responded they are located in Europe. "
    />

    <Section
      logo="../../ConditionBuilder_7.png"
      title="Problem"
      subtitle=""
      text="After looking at the legacy UI, the first thing that came up my mind was: 'Is this a maze on the screen?' Even having very similar functionalities with other products, I realized that our product has a bigger gap between expectations and actual behaviors. I proposed some enhancements based on some secondary research on similar features and use cases:"
    />

    <Section
      logo="../../ConditionBuilder_3.gif"
      title="Design"
      subtitle="Condition Manager"
      text="Sourcing administrators can see all the conditions defined in the event. Also, they can easily duplicate one condition to make changes"
    />

    <Section
      logo="../../ConditionBuilder_4.gif"
      title="Design"
      subtitle="Creating Simple Expressions"
      text="When creating new conditions, admins can create rows and groups before/after/inside each row and group"
    />

<Section
      logo="../../ConditionBuilder_5.gif"
      title="Design"
      subtitle="Creating Complex Expressions"
      text="If there are multiple criteria, admin can collapse and expand groups"
    />

<Section
      logo="../../ConditionBuilder_6.png"
      title="Interaction"
      subtitle=""
      text="I delivered fully interactive Figma mocks and detailed specs for the responsive dialogs that can accommodate complex conditions with multiple groups and rows."
    />

<Section
      logo=""
      title="Lessons Learned"
      subtitle=""
      text="While it's easy to just remove the cluttered, the real value comes out from making the cluttered decluttered. I first focused on understanding how the feature works thoroughly and understand the use cases. • Using dialogs in moderation, giving contextual information is good but the feature can be bigger than you thought. • For working with UX engineers, defining each element clearly and their roles early on are important to make common ground. • Always keep accessibility in mind, show labels and any changes always visible."
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

export default ConditionBuilder
