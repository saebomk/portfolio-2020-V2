export const SectionData = {
  fullproject: [
    {
      title: "Background",
      subtitle: "Completing the Cycle for Sourcing",
      description:
        "Strategic sourcing project is a fundamental cyclic process for sourcing managers, from identifying the current category spend, analyzing the market, strategizing the plan, running sourcing events, and benchmarking for the next cycle. I was tasked to redesign SAP Ariba Strategic Sourcing project object, which is a workspace that users can collaborate with internal stakeholders via task and document managing functionalities.",
      diagram: "../../images/animations/FullProject_1.svg",
      arialabel:
        "Strategic Sourcing project background with the persona and steps for the project",
    },
    {
      title: "Kick Off",
      subtitle: "Scope Based on Priority",
      description:
        "After the project started, I immediately realized the pretty-overwhelming flexibility of sourcing projects and their data. I first created the current interaction map by following some of the real user templates, the best practices, and previous design thinking workshop results, to understand each and every functionality in the project. After that, I discussed with product managers to scope out the first design phase by their priorities.",
      diagram: "../../images/animations/FullProject_2.svg",
      arialabel: "The Interaction map for Strategic Sourcing project",
    },
    {
      title: "Research",
      subtitle: "Understand the Key Use Cases and Problems",
      description:
        "We conducted a multi-methodology research effort to better understand the user's core goals and needs. For each research method, we set the specific research questions that we want to get answers from. I organized meaningful findings in a spreadsheet based on features and consolidated the analysis with recommendations, UX values, and UX priority ratings.",
      diagram: "../../images/animations/FullProject_3.svg",
      arialabel:
        "4 research methods I used for the projects, Heuristic evaluation, comparative analysis, user interviews, and card sorting",
    },
    {
      title: "Define",
      subtitle: "Multi-Persona User Flows",
      description:
        "From the research, we defined three personas and the flows that could be the most impactful. Along with the task flows, I identified and refined 5 more specific user flows based on the workflow (which objects are used) and ownership (who creates/performs the task).",
      diagram: "../../images/animations/FullProject_4.svg",
      arialabel: "User flows for 3 personas",
    },
    {
      title: "UX Values",
      subtitle: "Set Measurable Goals",
      description:
        "While we analyzed the findings, we tried mapping out the findings with the general UX goals and measurable metrics. The 3 values that got the most number of votes are set as the main UX values of the project: Simplicity, learnability, and Insightfulness. This helped us to have clear goals and generate the solution that meets the values.",
      diagram: "../../images/animations/FullProject_5.svg",
      arialabel:
        "3 UX Goals for the project, Simplicity, Ease of learning, and Insightfulness",
    },
    {
      title: "Design Highlight 1",
      subtitle: "Easy Task Assignment",
      description:
        "Sourcing manager John creates a new sourcing project. He can immediately check the overall templated tasks and start to assign the tasks for the team.",
      diagram: "../../images/animations/FullProject_6.svg",
      arialabel:
        "As Is and To Be for the tasks table design, and other table design explorations",
    },
    {
      title: "Design Highlight 2",
      subtitle: "Dynamic View Configuration of Tasks",
      description:
        "Supplier manager Jane is a part of the project team and needs to closely collaborate with sourcing managers. She checks the Kanban view with filters where she can see what are the immediate tasks and their dues.",
      diagram: "../../images/animations/FullProject_7.gif",
      arialabel: "Interactive mocks for tasks view from table to card view",
    },
    {
      title: "Design Highlight 3",
      subtitle: "Contextual Project Widgets",
      description:
        "John checks the progress of the project and see if there are any outstanding tasks or documents he needs to take care of. The widget content is contextual based on the project stages so it can be helpful for his weekly reporting and also future benchmarking.",
      diagram: "../../images/animations/FullProject_8.gif",
      arialabel: "Interactive mocks for project widget cards with carousel",
    },
    {
      title: "Outcome",
      subtitle: "Completing Design Cycle in Pandemic",
      description:
        "We got overall positive feedback from 16+ usability testings with sourcing managers and sourcing specialists. This project has been commented as 'an exemplary project' that completes the full design cycle within a broader product design team. • I could also collaborate with the SAP Design team to share the use cases to make alignment with Fiori 3 components for consistency. We delivered 2 versions of mockups (short-term and long-term) that can align with the design system. • Personally, I worked remotely for 90% of the project due to the pandemic, and this was a great opportunity to learn how to effectively collaborate with the team. (Thankfully, we were able to work on Figma and that immensely helped to feel the presence) Visualizing, and preparing visual aid for meetings helped me the most.",
      image: "",
    },
  ],
  patternlibrary: [
    {
      title: "Background",
      subtitle: "Call for Design Consistency",
      description:
        "When I first came to the Sourcing design team, all the apps teams worked in silos having different design patterns and guidelines. As a part of the SAP IES initiative for UX consistency, our team was one of few teams in Ariba who could start adopting the SAP Fiori design system early on for the guided beta of the redesigned app. I created a Sketch team design pattern library (which later I converted to Figma as well) so designers can share their design patterns and make the app-wide design consistent. It also can help avoid inefficiencies in development and lack of clarity when there are new team members get on board the team.",
      diagram: "../../images/animations/patternlibrary_4.svg",
      arialabel:
        "The before and after from in-house design pattern to SAP Fiori design system",
    },
    {
      title: "Project Journey 1",
      subtitle: "Collecting Patterns Bottom Up",
      description:
        "I started out reaching out to all team designers to collect all the components and their use cases in the app. We held two design critique sessions every week where designers can freely share their designs and discuss the pattern usage and its scalability before signing off to developers. I documented all new updates, open issues, and implementation status in the library.",
      diagram: "../../images/animations/patternlibrary_5.png",
      arialabel:
        "The process from designers discussing about the design pattern to cross-functional team sharing",
    },
    {
      title: "Project Journey 2",
      subtitle: "Designing Interactions with Developers",
      description:
        "I worked closely with developers to discuss the specs and make sure the design is implemented correctly. We had weekly sync up with developers to discuss new components and the development statuses. One clear demo could be way more effective than the spec with lengthy descriptions. For instance, I created a Javascript animation demo using SAP Fundamentals Angular components to show sticky behavior for page, section, and table headers.",
      diagram: "../../images/animations/patternlibrary_1.gif",
      arialabel:
        "Interactive mocks for showing the sticky header and footer behavior",
    },
    {
      title: "Project Journey 3",
      subtitle: "Creating New Patterns",
      description:
        "While aligning the existing components to the design system, designers and I also worked on creating sourcing-specific patterns such as form search, page-wide chooser, also tables. For example, as Sourcing app is table-heavy application, grid table pattern with the cell inline editability is critical for users to quickly edit their data from the first-depth pages.",
      diagram: "../../images/animations/patternlibrary_7.png",
      arialabel: "Table pattern design and explorations on cell interaction",
    },
    {
      title: "Project Journey 4",
      subtitle: "Migrating to Figma",
      description:
        "Meanwhile, we were one of the first waves that migrated our team design library to Figma as soon as SAP design team onboarding started. The goal for Figma migration was to create the pattern as flexible as possible utilizing new features such as auto-layout and frames. With one design intern, I listed out all in-development patterns and their variations. The full migration took 1 month and updated upon new projects. I also created a quick guide for Figma (with cute mini tutorials!)!",
      diagram: "../../images/animations/patternlibrary_2.svg",
      arialabel: "Some screenshots from Figma Guidelines for Newcomers",
    },
    {
      title: "Project Journey 5",
      subtitle: "Aligning with Broader Design System",
      description:
        "I shared the team library with the broader Apps design framework team to share Sourcing use cases and our design rationales. There is still an ongoing team effort to make UX consistency across different products. I created Sourcing - Fiori Index that designers can see and compare the design, development status in both Sourcing native and Fiori components so designers can decide on what components to use.",
      diagram: "../../images/animations/patternlibrary_8.png",
      arialabel: "The screenshot showing all Sourcing App Components",
    },
    {
      title: "Lessons Learned",
      subtitle: "",
      description:
        "Adopted Fiori design system and delivered fully Fiori-compliant mocks for consistent user experience, improved the productivity by reducing inconsistency and redundant communication  • Managed app design pattern designers can reuse in Sketch / InVision (total 20 versioning) and Figma with 9 contributors, 40% of the symbols were created from the scrath, increased collaboration between designers with 2 team design reviews per week • Held all total 25 weekly cross-functional team sync-ups, shared design specs and interactive mocks • The pattern library's impact can be limited without understanding the full use cases, spend time to research on components and their variations. • It's always good to keep up with the latest consumer UI trend but don't forget you are dealing with enterprise product, maybe you are cutting out possible use cases. • While consistency is the key of seamless enterprise UX, my product persona's use cases could be varied from the usual cases",
      image: "",
    },
  ],
  supplierInvitationUX: [
    {
      title: "Background",
      subtitle: "",
      description:
        "Selecting and shortlisting suppliers in sourcing events is a big part of the sourcing projects through a comprehensive analysis of existing suppliers as well as discovery research on the new supply market. Oftentimes, an organization can have a supplier segmentation and selection criteria that the sourcing manager can follow, but everything has to be manual and repetitive in the current solution. The team wants to revamp the supplier search & chooser UX so the experience can be more efficient and smart for sourcing managers.",
      image: "",
    },
    {
      title: "Problem",
      subtitle: "",
      description:
        "We want to reduce the time that sourcing managers manually search for organizations and contacts for the invitation.",
      diagram: "",
    },
    {
      title: "Research",
      subtitle: "Provide help ahead",
      description:
        "There was already numerous customer feedback asking about enhancing the poor search results in supplier invitation. Therefore, I collected user feedback to identify what are the most common parameters for the search. Meanwhile, we collaborated with the data science team to come up with the use cases where recommendations can be useful. As a result, I came up with 2 refined user stories that can use recommendations and search.",
      diagram: "../../images/animations/supplierinvitationux_1.svg",
      arialabel:
        "The user flow for searching suppliers in the event from recommendations to search",
    },
    {
      title: "Design",
      subtitle: "For Simple Events",
      description: "Users can see recommendations in zero state table",
      diagram: "../../images/animations/supplierinvitationux_2.gif",
      arialabel:
        "Interactive mocks for showing recommended supplier cards in empty suppliers table",
    },
    {
      title: "Design",
      subtitle: "For Complex Events",
      description:
        "There is still an ongoing team effort to make UX consistency across different products. I shared the team library with the broader Apps design framework team to share Sourcing use cases and our design rationales. In the meantime, I created Sourcing - Fiori Index that designers can see and compare the design, development status in both Sourcing native and Fiori components so designers can decide on what components to use. Here are the completed design patterns in Figma.",
      diagram: "../../images/animations/supplierinvitationux_3.gif",
      arialabel:
        "Interactive mocks for showing recommended suppliers for items with recommendation scores",
    },
    {
      title: "Design",
      subtitle: "For Search",
      description:
        "If user wants to find a specific supplier with the organization or contact informatioon, they can go to Advanced search chooser with supplier filters",
      diagram: "../../images/animations/supplierinvitationux_4.svg",
      arialabel: "The image mock for supplier chooser with filters",
    },
    {
      title: "Test",
      subtitle: "",
      description:
        "Especially for item-level supplier recommendations, I tested the prototypes with 5 participants (indirect sourcing managers, sourcing specialists).",
      diagram: "../../images/animations/supplierinvitationux_5.svg",
      arialabel:
        "The design testing options for supplier chooser with recommendations",
    },
    {
      title: "Component Building",
      subtitle: "Make the Common Component Reusable",
      description:
        "Supplier search & selection UX is not only the case for Sourcing but also a very common pattern for other buying apps. I shared the use cases and designs with the Supplier Management app, Contracts, and Buying app designers to come up with 3 design patterns that designers can use across the apps.",
      diagram: "../../images/animations/supplierinvitationux_6.svg",
      arialabel: "The designed flow for global supplier chooser component",
    },
    {
      title: "Lessons Learned",
      subtitle: "",
      description:
        "For enterprise software UX, always consider the consequences of my designs and think big, there always could be use cases I haven't discovered. • Consistency across apps gives users comfort and low memory burden when they see a new interaction. • This was my first time to collaborate with an intern, I was impressed by her moderating and improvisation skills in the user sessions!",
      image: "",
    },
  ],
  conditionBuilder: [
    {
      title: "Background",
      subtitle: "",
      description:
        "Often sourcing managers want to add questions or content that are visible only when the supplier responded with a certain answer. For instance, a sourcing event template would show additional compliance requirement materials for only who responded they are located in Europe.",
      image: "../../images/animations/conditionbuilder_1.svg",
      arialabel:
        "The data flow showing the relationship between individual conditions and event conditions manager",
    },
    {
      title: "Problem",
      subtitle: "",
      description:
        "After looking at the legacy UI, the first thing that came up my mind was: 'Is this a maze on the screen?' Even having very similar functionalities with other products, I realized that our product has a bigger gap between expectations and actual behaviors. I proposed some enhancements based on some secondary research on similar features and use cases:",
      diagram: "../../images/animations/conditionbuilder_2.svg",
      arialabel:
        "The three enhancement points for condition builder UX, intuitive, helpful, and efficient",
    },
    {
      title: "Design",
      subtitle: "Condition Manager",
      description:
        "There was already numerous customer feedback asking about enhancing the poor search results in supplier invitation. Therefore, I collected user feedback to identify what are the most common parameters for the search. Meanwhile, we collaborated with the data science team to come up with the use cases where recommendations can be useful. As a result, I came up with 2 refined user stories that can use recommendations and search.",
      diagram: "../../images/animations/conditionbuilder_3.gif",
      arialabel:
        "Interactive mocks for event condition manager with the list of conditions",
    },
    {
      title: "Design",
      subtitle: "Creating Simple Expressions",
      description:
        "When creating new conditions, admins can create rows and groups before/after/inside each row and group",
      diagram: "../../images/animations/conditionbuilder_4.gif",
      arialabel:
        "Interactive mocks for expression builder creating rows and groups",
    },
    {
      title: "Design",
      subtitle: "Creating Complex Expressions",
      description:
        "If there are multiple criteria, admin can collapse and expand groups",
      diagram: "../../images/animations/conditionbuilder_5.gif",
      arialabel: "Interactive mocks for expression builder duplicating groups",
    },
    {
      title: "Interaction",
      subtitle: "",
      description:
        "I delivered fully interactive Figma mocks and detailed specs for the responsive dialogs that can accommodate complex conditions with multiple groups and rows.",
      diagram: "../../images/animations/conditionbuilder_6.svg",
      arialabel: "The design specification for conditions builder",
    },
    {
      title: "Lessons Learned",
      subtitle: "",
      description:
        "While it's easy to just remove the cluttered, the real value comes out from making the cluttered decluttered. I first focused on understanding how the feature works thoroughly and understand the use cases. • Using dialogs in moderation, giving contextual information is good but the feature can be bigger than you thought. • For working with UX engineers, defining each element clearly and their roles early on are important to make common ground. • Always keep accessibility in mind, show labels and any changes always visible.",
      diagram: "",
    },
  ],
};
