export const projects = [
  {
    id: 'apex-ai',
    title: 'UX & Cloud Engineer — Apex AI',
    tags: ['Design', 'Engineering'],
    year: '2025',
    type: 'Role',
    desc: 'Leading end-to-end product development across B2B client engagements and internal projects, owning the full pipeline from UI design through AWS deployment.',
    sections: [
      {
        heading: 'The role',
        body: 'Lead end-to-end product development across 3 concurrent B2B client engagements and internal projects at Apex AI, a startup building tools in the AI/ML space. The work spans UX design, front-end engineering, API development, and cloud infrastructure — owning the full pipeline from Figma wireframes through production deployment on AWS.',
      },
      {
        heading: 'Products shipped',
        body: 'Shipped two complete products: an internal audio dataset management system for low-power wake-word model training, and a customer-facing LLM agent interface enabling clients to present their AI capabilities to end users. Participated in B2B technical specification sessions, translating stakeholder use cases and feature requirements into implementation plans with full UI design flexibility.',
      },
      {
        heading: 'Engineering',
        body: 'Built frontend applications using React, Vite, and TypeScript. Authored RESTful APIs in Python integrated into new and existing product surfaces. Applied full UX design process — wireframing, user testing, and iterative prototyping — across all shipped products.',
      },
      {
        heading: 'Infrastructure',
        body: 'Manage and maintain AWS infrastructure across EC2, S3, Lambda, and Amplify. Currently developing an ML model training interface as part of an ongoing internal product initiative.',
      },
    ],
    skills: ['React', 'TypeScript', 'Vite', 'Python', 'AWS EC2', 'S3', 'Lambda', 'Amplify', 'UX Design', 'Figma', 'RESTful APIs', 'LLM Integration'],
  },
  {
    id: 'maaetc',
    title: 'Data, Evaluation & Technology Specialist — MAAETC',
    tags: ['Data'],
    year: '2025',
    type: 'Role',
    desc: 'Analyzed program performance data and presented insights to stakeholders to guide resource allocation and educational offerings at the University of Pittsburgh\'s Mid-Atlantic AIDS Education and Training Center.',
    sections: [
      {
        heading: 'The role',
        body: 'Worked at the Mid-Atlantic AIDS Education and Training Center (MAAETC) at the University of Pittsburgh as a Data, Evaluation & Technology Specialist. The position was eliminated in June 2025 due to federal funding cuts, amid broader disruptions to public health programming under shifting administration guidelines.',
      },
      {
        heading: 'Data & compliance',
        body: 'Designed and maintained data intake pipelines using Excel and Python to process Qualtrics survey data from training seminars, producing standardized federal compliance reports. Adapted reporting workflows in real time as federal requirements evolved, ensuring continued compliance under shifting guidelines.',
      },
      {
        heading: 'UX & digital',
        body: 'Collaborated with a design agency on the UX redesign of maaetc.org, conducting user testing, editing content, and managing a custom CMS to publish updated materials. Orchestrated integrated digital marketing campaigns across Mailchimp, Facebook, and Instagram, growing email subscriptions by 16% and achieving 90% turnout for key in-person events.',
      },
      {
        heading: 'Consulting',
        body: 'Served as technology consultant for team equipment procurement and facilitated web-based educator and client training sessions.',
      },
    ],
    highlights: [
      { value: '+16%', label: 'newsletter subscriptions' },
      { value: '90%', label: 'in-person event turnout' },
    ],
    skills: ['Python', 'Excel', 'Qualtrics', 'Data Pipelines', 'Federal Compliance Reporting', 'Mailchimp', 'CMS', 'Digital Marketing', 'User Testing'],
  },
  {
    id: 'pfc-website',
    title: "Pittsburgh Fencers' Club Website",
    tags: ['Engineering', 'Design'],
    year: '2024',
    type: 'Project',
    desc: 'Rebuilt a defunct club website from the ground up on WordPress, integrating MindBody for scheduling and registration. 22,000+ views and 8,000+ unique visitors since launch.',
    highlights: [
      { value: '22k+', label: 'views since launch' },
      { value: '8k+', label: 'unique visitors' },
    ],
    sections: [
      {
        heading: 'Discovery',
        body: "Independently directed all decisions on site architecture, user flows, and layout while incorporating client feedback on program-specific pages — summer camps, high school programs, and membership information. The prior site was defunct; the project started from scratch.",
      },
      {
        heading: 'Build',
        body: 'Rebuilt the site on WordPress CMS, integrating MindBody for class scheduling, event registration, and client tracking. Designed and structured content to serve both current members checking schedules and prospective members exploring the club for the first time.',
      },
      {
        heading: 'Outcome',
        body: 'The site has accumulated 22,000+ views and 8,000+ unique visitors since launch. Providing ongoing maintenance, content updates, and feature additions as the club\'s programs grow.',
      },
    ],
    skills: ['WordPress', 'MindBody', 'HTML', 'CSS', 'JavaScript', 'CMS', 'Responsive Design', 'Client Management'],
  },
  {
    id: 'case-webform',
    title: 'CASE Webform Redesign',
    tags: ['Design', 'UX'],
    year: '2023',
    type: 'Capstone',
    desc: 'Led user research and discovery for a full redesign of the CMU SCS CASE internal web form, used by staff and IT. Achieved a 20-point improvement in System Usability Scale score.',
    highlights: [
      { value: '+20', label: 'SUS point improvement' },
      { value: '52→72', label: 'marginal to good' },
    ],
    sections: [
      {
        heading: 'Discovery',
        body: "Led user research for a full redesign of the CMU School of Computer Science's Configuration and Administration of SCS Equipment (CASE) internal web form — a tool used daily by staff and IT personnel. Began with stakeholder interviews and surveys to understand workflow requirements, constraints, and mental models.",
      },
      {
        heading: 'Research',
        body: 'Conducted usability testing, iterative prototyping, ideation sessions, and storyboarding to surface pain points and define redesign requirements. Identified three core issues: unclear field labeling, a non-linear flow mismatched to users\' task model, and insufficient submission feedback.',
      },
      {
        heading: 'Design & delivery',
        body: 'Iterated from wireframes through a high-fidelity Figma prototype, validating each stage with hallway testing. Delivered both the final hi-fi prototype and a coded implementation.',
      },
      {
        heading: 'Results',
        body: 'Post-launch usability testing measured a 20-point improvement in System Usability Scale score, moving from 52 (marginal) to 72 (good) — reflecting measurable gains in task completion confidence and reduced error rates.',
      },
    ],
    skills: ['User Research', 'Usability Testing', 'Figma', 'Wireframing', 'Prototyping', 'HCI', 'Stakeholder Interviews', 'Storyboarding'],
  },
  {
    id: 'covid-viz',
    title: 'COVID Vulnerability Visualizations',
    tags: ['Data', 'Engineering'],
    year: '2022',
    type: 'Project',
    desc: 'Analyzed federal Social Vulnerability Index and COVID-19 data across all US counties to identify factors most predictive of outbreak vulnerability.',
    sections: [
      {
        heading: 'Context',
        body: 'Analyzed federal Social Vulnerability Index and COVID-19 data across all US counties to identify which vulnerability dimensions — housing density, healthcare access, geographic isolation — were most predictive of outbreak and disaster impact. The goal was to make these relationships accessible to non-technical audiences.',
      },
      {
        heading: 'Approach',
        body: 'Led research design and Python development. Used Pandas for data cleaning and merging across federal datasets, Altair for interactive chart generation, and Streamlit to wrap the analysis in a publicly accessible web application requiring no technical background to use.',
      },
      {
        heading: 'Outcome',
        body: 'Geographic isolation, housing density, and lack of health insurance access emerged as the strongest co-predictors of outbreak severity. Presented findings to both technical and non-technical audiences, demonstrating the tool\'s filtering capabilities by state, county, and vulnerability category.',
      },
    ],
    skills: ['Python', 'Streamlit', 'Altair', 'Pandas', 'Data Visualization', 'Research Design'],
  },
  {
    id: 'flowatt',
    title: 'FloWatt — Digital Service Innovation',
    tags: ['Design'],
    year: '2022',
    type: 'Project',
    desc: 'Conceived and pitched FloWatt, a consumer IoT utility optimization service. Selected as one of the top 12 projects out of 55 by peer vote.',
    highlights: [
      { value: 'Top 12', label: 'of 55 projects in cohort' },
    ],
    sections: [
      {
        heading: 'The concept',
        body: 'Conceived FloWatt, a consumer IoT utility optimization service that aggregates water, electricity, and other usage data via connected modules to help households identify inefficiencies and reduce costs. The service surfaced actionable insights and billing forecasts before charges accumulated.',
      },
      {
        heading: 'Process',
        body: 'Led a cross-functional team from ideation through a Figma prototype, following a double-diamond process with defined research, synthesis, and concept development phases. Conducted market research, managed task distribution, and resolved team dynamics throughout the project lifecycle.',
      },
      {
        heading: 'Recognition',
        body: 'Selected as one of the top 12 projects out of 55 by peer vote, recognized for the clarity of the service concept and the rigor of the market research grounding the pitch.',
      },
    ],
    skills: ['Service Design', 'Market Research', 'Figma', 'Prototyping', 'Design Thinking', 'Team Leadership'],
  },
  {
    id: 'cerlab',
    title: 'Depowdering Automation — CMU CERLAB',
    tags: ['Engineering'],
    year: '2019',
    type: 'Research',
    desc: 'Research under Dr. Kenji Shimada automating metal 3D printing post-processing with robotic arms. Work contributed to a subsequent publication by graduate researchers.',
    sections: [
      {
        heading: 'Research context',
        body: "Worked under Dr. Kenji Shimada at CMU's Computational Engineering & Robotics Lab (CERLAB) on automating the post-processing stage of metal additive manufacturing. Depowdering — removing residual powder from printed metal parts — is labor-intensive and hazardous; the project aimed to replace manual handling with robotic automation.",
      },
      {
        heading: 'Technical approach',
        body: 'Developed simulated path-planning algorithms for robotic vacuum end-effectors in collaboration with a research partner (now at NREC), modeling part geometry to generate efficient powder removal trajectories. Used C++ for performance-critical path computation and Python for simulation scripting and testing.',
      },
      {
        heading: 'Implementation & impact',
        body: 'Integrated the system with ROS for hardware-abstracted robot control. Independently containerized the entire codebase in Docker, enabling reliable cross-platform deployment on Windows and Linux. The work contributed to a subsequent publication by graduate researchers in the lab.',
      },
    ],
    skills: ['C++', 'Python', 'ROS', 'Docker', 'Robotics', 'Path Planning'],
  },
]
