export const projects = [
  {
    id: 'apex-ai',
    title: 'UX & Cloud Platform — Apex AI',
    tags: ['Design', 'Engineering'],
    year: '2025',
    type: 'Role',
    desc: 'Architecting and deploying a responsive web application on AWS, applying HCI principles to make complex AI data accessible and intuitive for end-users.',
    sections: [
      {
        heading: 'The role',
        body: 'Serve as the primary interface between product goals and cloud infrastructure at Apex AI, a startup building tools for ML data accessibility. The work spans UX design, front-end development, and AWS cloud architecture — shipping across the full stack from Figma prototypes to deployed infrastructure.',
      },
      {
        heading: 'Platform design',
        body: 'Designed the user-facing layer of the platform with a focus on making ML outputs legible to non-technical stakeholders. Applied HCI principles around visual hierarchy, progressive disclosure, and feedback to build interfaces that surface complex model data in a way users can act on without needing to understand the underlying system.',
      },
      {
        heading: 'Cloud architecture',
        body: 'Configured and maintain the AWS infrastructure underpinning the platform: EC2 instances for compute, Lambda for serverless event handling, S3 for asset and data storage, and IAM policies for access control. Prioritized reliability and cost efficiency through right-sized instances and event-driven design patterns.',
      },
    ],
    skills: ['React', 'AWS EC2', 'AWS Lambda', 'S3', 'UX Design', 'HCI', 'Figma', 'IAM'],
  },
  {
    id: 'maaetc',
    title: 'Data, Evaluation & Technology Specialist — MAAETC',
    tags: ['Data'],
    year: '2025',
    type: 'Role',
    desc: 'Analyzed program performance data and presented insights to stakeholders to guide resource allocation and educational offerings.',
    highlights: [
      { value: '+16%', label: 'newsletter subscriptions' },
      { value: '90%', label: 'in-person event turnout' },
    ],
    sections: [
      {
        heading: 'The role',
        body: 'Consulted for the Mid-Atlantic AIDS Education and Training Center (MAAETC) at the University of Pittsburgh as a Data, Evaluation & Technology Specialist. The work focused on translating program performance data into decision-relevant insights and growing the organization\'s digital presence.',
      },
      {
        heading: 'Analytics & evaluation',
        body: 'Analyzed training program performance data across multiple initiatives, synthesizing metrics into stakeholder-facing reports and presentations. Translated raw program data into actionable recommendations for resource allocation, curriculum prioritization, and the design of future educational offerings.',
      },
      {
        heading: 'Digital marketing',
        body: 'Coordinated digital marketing campaigns across email and social media channels, managing scheduling, content, and performance tracking. Campaigns resulted in a 16% increase in newsletter subscriptions and 90% in-person turnout at sponsored events.',
      },
    ],
    skills: ['Data Analytics', 'Stakeholder Presentation', 'Digital Marketing', 'Workflow Optimization'],
  },
  {
    id: 'pfc-website',
    title: "Pittsburgh Fencers' Club Website",
    tags: ['Engineering', 'Design'],
    year: '2024',
    type: 'Project',
    desc: 'Independently designed and developed a responsive club website from client consultation through deployment.',
    sections: [
      {
        heading: 'Discovery',
        body: "Worked directly with Pittsburgh Fencers' Club leadership to understand their communication goals, existing pain points, and what members most needed from a club site. Conducted a content audit of the prior site and defined requirements around schedules, membership information, and event announcements.",
      },
      {
        heading: 'Design & development',
        body: 'Designed the full site from wireframe to implementation using HTML, CSS, and JavaScript. Prioritized readability and mobile responsiveness given the club\'s audience: current members checking practice schedules on their phones, and prospective members exploring the club for the first time.',
      },
      {
        heading: 'Outcome',
        body: 'The site is actively maintained and serves as the club\'s primary digital presence. Improved access to schedules and membership information has simplified member communication and reduced the administrative overhead of handling repeated inquiries.',
      },
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Client Management'],
  },
  {
    id: 'case-webform',
    title: 'CASE Webform Redesign',
    tags: ['Design', 'UX'],
    year: '2023',
    type: 'Capstone',
    desc: 'Led user research and discovery for a legacy webform redesign, achieving a 20-point improvement in system usability score.',
    highlights: [
      { value: '+20', label: 'SUS point improvement' },
      { value: '52→72', label: 'marginal to good' },
    ],
    sections: [
      {
        heading: 'Discovery',
        body: 'Led user research and discovery for a legacy webform system at CASE, beginning with stakeholder interviews to understand workflow requirements and organizational constraints. Usability sessions with end users surfaced recurring friction points in the existing form flow.',
      },
      {
        heading: 'Research findings',
        body: 'Identified three primary usability issues: unclear field labeling causing repeated input errors, a non-linear flow that mismatched users\' mental model of the task, and insufficient feedback at submission. These findings directly shaped the redesign priorities.',
      },
      {
        heading: 'Redesign',
        body: 'Produced wireframes, iterated on designs based on hallway testing, and led the final implementation. The redesigned form consolidated steps, clarified labeling, and introduced inline validation and explicit completion feedback.',
      },
      {
        heading: 'Results',
        body: 'Post-launch usability testing showed a 20-point improvement in System Usability Scale score, from 52 (marginal) to 72 (good). The gain reflected measurable improvements in task completion confidence and a reduction in error rates during testing.',
      },
    ],
    skills: ['User Research', 'Usability Testing', 'Figma', 'Wireframing', 'HCI', 'Stakeholder Interviews'],
  },
  {
    id: 'covid-viz',
    title: 'COVID Vulnerability Visualizations',
    tags: ['Data', 'Engineering'],
    year: '2022',
    type: 'Project',
    desc: 'Analyzed social vulnerability index and COVID-19 data to identify the most predictive factors of outbreak vulnerability.',
    sections: [
      {
        heading: 'Context',
        body: 'Investigated the relationship between social vulnerability and COVID-19 outbreak severity by combining CDC Social Vulnerability Index data with county-level case and mortality records. The goal was to identify which vulnerability dimensions were most predictive of outbreak impact — and to make those relationships explorable for a general audience.',
      },
      {
        heading: 'Approach',
        body: 'Led research design and Python development. Used Pandas for data cleaning and merging across datasets, Altair for interactive chart generation, and Streamlit to wrap the analysis in a publicly accessible web application requiring no technical background to use.',
      },
      {
        heading: 'Key findings',
        body: 'Geographic isolation, housing density, and lack of health insurance access emerged as the strongest co-predictors of outbreak severity. The visualization tool made these correlations filterable by state, county, and vulnerability category, enabling users to surface patterns relevant to their region.',
      },
    ],
    skills: ['Python', 'Streamlit', 'Altair', 'Data Visualization', 'Research Design', 'Pandas'],
  },
  {
    id: 'flowatt',
    title: 'FloWatt — Digital Service Innovation',
    tags: ['Design'],
    year: '2022',
    type: 'Project',
    desc: 'Led market research and ideation for FloWatt, a cost-saving digital service concept for utilities. Selected as top 12 of 55 projects.',
    highlights: [
      { value: 'Top 12', label: 'of 55 projects in cohort' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'Utility billing systems create unnecessary costs for consumers through opaque rate structures and poor feedback on consumption patterns. FloWatt was a digital service concept designed to address these inefficiencies by giving users actionable insight into their energy usage before costs accumulated.',
      },
      {
        heading: 'Process',
        body: 'Led a cross-functional team through the full service design lifecycle: market analysis, competitive audit, user research, concept ideation, service prototyping, and pitch preparation. The process followed a double-diamond model with defined divergence and convergence phases.',
      },
      {
        heading: 'Concept',
        body: "FloWatt integrated with utility providers to deliver a clear, real-time view of consumption, projected costs, and savings opportunities. The service included nudge-based notifications and a billing forecast tool designed to surface savings before they became charges.",
      },
      {
        heading: 'Recognition',
        body: 'Selected by a panel of peers and instructors as one of the top 12 projects out of 55 in the course cohort, recognized for the rigor of its research grounding and the clarity of its service blueprint.',
      },
    ],
    skills: ['Service Design', 'Market Research', 'Design Thinking', 'Prototyping', 'Team Leadership'],
  },
  {
    id: 'cerlab',
    title: 'Depowdering Automation — CMU CERLAB',
    tags: ['Engineering'],
    year: '2019',
    type: 'Research',
    desc: 'Research under Dr. Kenji Shimada automating metal 3D printing post-processing with robotic arms.',
    sections: [
      {
        heading: 'Research context',
        body: "Worked under Dr. Kenji Shimada at CMU's Computational Engineering & Robotics Lab (CERLAB) on automating the post-processing stage of metal additive manufacturing. Depowdering — removing residual powder from printed metal parts — is labor-intensive and hazardous to perform manually; the project aimed to replace manual handling with robotic automation.",
      },
      {
        heading: 'Technical approach',
        body: 'Developed simulated path planning algorithms for robotic vacuum end-effectors, modeling the geometry of printed parts to generate efficient powder removal trajectories. Used C++ for performance-critical path computation and Python for simulation scripting, visualization, and testing.',
      },
      {
        heading: 'Implementation',
        body: 'Integrated the system with ROS (Robot Operating System) for hardware-abstracted robot control and sensor interfacing. Containerized the entire codebase in Docker, enabling reliable cross-platform development and deployment across Windows and Linux environments.',
      },
    ],
    skills: ['C++', 'Python', 'ROS', 'Docker', 'Robotics', 'Path Planning'],
  },
]
