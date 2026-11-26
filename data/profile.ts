export const profile = {
  name: "Milan Chaudhary",
  title: "Full-Stack Developer",
  tagline:
    "I build reliable and user-friendly web applications to solve complex problems.",
  location: "Lalitpur, Nepal",
  company: "IT Hive Solutions Pvt. Ltd.",
  avatar: "/milan.jpeg",
  email: "milanchaudhary589@gmail.com",
  github: "https://github.com/Milan589",
  linkedin: "https://www.linkedin.com/in/milan-chaudhary-5b0a1921b",
  about: [
    "A passionate Full-Stack Developer with knowledge of web and mobile application development. ",
    "Experienced in working with Next.js, React.js, TypeScript, Laravel, PHP, and databases such as PostgreSQL, MySQL, MongoDB, and Supabase. Hardworking and eager to learn new technologies, with the ability to research and find effective solutions to problems. Always focused on improving technical skills and building reliable, user-friendly applications.",
  ],
  cvPdf: "/resume_file.pdf",
};

export const experience = [
  {
    role: "Full-Stack Developer",
    org: "IT Hive Solutions Pvt. Ltd.",
    period: "January 2023 – Present",
    points: [
      "Developed RESTful APIs using Laravel and Node.js.",
      "Managed databases using PostgreSQL, Supabase, and Eloquent ORM.",
      "Implemented authentication using Clerk.",
      "Built web apps with React.js and Next.js. and mobile apps with Flutter",
    ],
  },
  {
    role: "PHP / Laravel Developer (Internship)",
    org: "IT Hive Solutions Pvt. Ltd.",
    period: "November 2022 – January 2023",
    points: [
      "Developed backend functionality for web and mobile applications using Laravel.",
      "Built RESTful APIs for frontend and backend communication.",
      "Managed database migrations, queues and scheduled jobs.",
      "Developed admin dashboards and optimized application performance.",
    ],
  },
];

export const projects = [
  {
    slug: "self-assessment",
    name: "Self-Assessment Uk Tax Filing Platform",
    period: "November 2025 – April 2026",
    role: "Full-stack developer",
    summary:
      "A web-based platform that helps UK taxpayers manage income, expenses, calculate taxes, and prepare Self-Assessment tax returns.",
    overview:
      "Developed a digital tax filing platform using Next.js and Supabase to simplify UK Self-Assessment processes. Worked on frontend development, backend APIs, database design, tax calculations, and HMRC integration for managing and submitting tax returns.",
    highlights: [
      "Developed dynamic tax forms for managing income, expenses, and allowances.",
      "Implemented tax calculations and HMRC API integration.",
      "Designed and managed database structures using Supabase and PostgreSQL.",
      "Implemented authentication and secure API validation.",
      "Built tax summaries, computations, and submission workflows.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Zod", "Clerk"],
    link: "https://dev.yourpocketaccountant.uk",
    repo: "https://github.com/IT-Hive-Solutions/uk-tax-filling-sys",
  },
  {
    slug: "school-rating-system",
    name: "School Rating System – Mahalaxmi Municipality",
    period: "January 2024 – May 2024",
    role: "Full-Stack Developer",
    summary:
      "A web-based platform for assessing and grading government and institutional schools based on infrastructure, academic performance, staffing, and management.",
    overview:
      "Developed a school assessment system for Mahalaxmi Municipality to manage school records and evaluate government and institutional schools through category-based questionnaires. Schools submit information, select predefined answers, and upload supporting documents. Each answer carries an internal score used to calculate overall marks, determine school grades, and generate assessment reports and certificates.",
    highlights: [
      "Implemented role-based access for government and institutional schools.",
      "Developed school record and information management modules.",
      "Created category-based assessments covering infrastructure, teacher qualifications, student enrollment, academic achievement, and financial and educational management.",
      "Implemented dynamic questionnaires with predefined answer options.",
      "Enabled supporting document uploads for assessment verification.",
      "Developed option-based scoring and automated school grading mechanisms.",
      "Generated assessment reports and certificates based on evaluation results.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    link: "https://srs.ithivesolutions.com/",
    repo: "https://github.com/IT-Hive-Solutions/School-Rating-System-Laravel",
  },
  {
    slug: "patrika-app",
    name: "Patrika – Mobile App",
    period: "September 2023 – December 2023",
    role: "Flutter Developer",
    summary:
      "A mobile application that displays news collected from multiple sources in one place.",
    overview:
      "Developed a Flutter-based news application that allows users to browse news from different sources. Integrated mobile advertisements for app monetization.",
    highlights: [
      "Built a mobile app to display news from multiple sources.",
      "Integrated news APIs to fetch and display articles.",
      "Implemented mobile advertisements.",
    ],
    stack: ["Flutter", "Dart"],
    link: "https://play.google.com/store/apps/details?id=com.app.patrika&hl=en",
    repo: "https://github.com/IT-Hive-Solutions/News_Portal_Flutter",
  },
  {
    slug: "futsal-nepal-backend",
    name: "Futsal Nepal – Online Booking System",
    period: "November 2022 – January 2023",
    role: "Full-Stack Developer",
    summary:
      "A web-based platform for managing futsal grounds, online bookings, teams, and match fixtures.",
    overview:
      "Developed a Laravel-based platform with admin and user management features. Users can book futsal grounds, manage teams, and schedule matches, while admins manage grounds, bookings, teams, and fixtures.",
    highlights: [
      "Implemented online futsal ground booking and management.",
      "Developed team management and match fixture scheduling.",
      "Built admin and user dashboards for managing bookings, teams, and matches.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    link: "https://nepalifutsal.com/",
    repo: "https://github.com/Santosh9001/futsal-nepal-backend",
  },
  {
    slug: "arsenal-nepal-management-dashboard",
    name: "Arsenal Nepal Backend",
    period: "January 2023 - July 2023",
    role: "Full-Stack Developer",
    summary:
      "A web-based management dashboard for managing Arsenal FC events, match scores, and information delivered to the mobile application through RESTful APIs.",
    overview:
      "Developed a Laravel-based web dashboard to manage club events, match information, scores, and historical results. Implemented RESTful APIs to provide structured data to the separate Arsenal Nepal Flutter mobile application.",
    highlights: [
      "Developed a web-based administration dashboard using Laravel.",
      "Implemented event and match management functionality.",
      "Managed match scores and historical match information.",
      "Developed RESTful APIs to deliver data to the Flutter mobile application.",
      "Handled backend data management and API integration.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "RESTful API"],
    link: "",
    repo: "https://github.com/IT-Hive-Solutions/Arsenal_Nepal_Backend_With_Laravel",
  },
  {
    slug: "arsenal-nepal-app",
    name: "Arsenal Nepal App",
    period: "January 2023 - August 2023",
    role: "Flutter Developer",
    summary:
      "A mobile application providing Arsenal FC supporters with club information, match scores, and match history.",
    overview:
      "Developed a Flutter-based mobile application for Arsenal supporters in Nepal to access club-related information, view match scores, and explore previous match results and history.",
    highlights: [
      "Developed a cross-platform mobile application using Flutter and Dart.",
      "Displayed Arsenal FC match scores and previous match results.",
      "Provided club-related information for Arsenal supporters.",
    ],
    stack: ["Flutter", "Dart"],
    link: "",
    repo: "https://github.com/IT-Hive-Solutions/Arsenal_Nepal_Flutter",
  },
  {
    slug: "pooja-samagri-dashboard",
    name: "Pooja Samagri – Admin Dashboard",
    period: "December 2023 - January 2024",
    role: "Full-Stack Developer",
    summary:
      "A web and mobile e-commerce platform for purchasing Hindu worship products and packages through online ordering and payment.",
    overview:
      "Developed a Laravel-based dashboard integrated with third-party APIs to manage products, worship packages, customers, orders, and payments. The platform supports online purchasing of Pooja Samagri products and packages, providing customers with a convenient shopping experience.",
    highlights: [
      "Developed an administrative dashboard using Laravel.",
      "Integrated third-party APIs for application functionality.",
      "Implemented product and Pooja package management.",
      "Developed customer and order management functionality.",
      "Integrated payment processing for online purchases.",
      "Supported product and package purchasing through the online platform.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "REST API"],
    link: "",
    repo: "https://github.com/IT-Hive-Solutions/Pooja_App_Dashboard_with_Laravel",
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "PHP", "SQL"] },
  {
    group: "Frontend",
    items: ["React", "Next.js (App Router)", "HTML", "CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Laravel", "REST APIs", "Zod", "Prisma"],
  },
  { group: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"] },
  {
    group: "Auth and tools",
    items: ["Clerk", "Git", "GitHub", "VS Code", "Postman"],
  },
];

export const education = [
  {
    degree: "Bachelors in Computer Science and Information Technology",
    school:
      "Orchid International College, Tribhuvan University, Kathmandu, (November 2018 - August 2023)",
    period: "November 2018 – August 2023",
    notes: [
      "Grade: First Division (71.40%)",
      "Dissertation: Handwritten Digit Recognition from License Plates for Low Resource Language (Nepali)",
    ],
  },
  {
    degree: "+2 in Science (Physics, Chemistry, Mathematics, Computer Science)",
    school:
      "Padmodaya Public Model Secondary School, Dang,(July 2016 - May 2018)",
    period: "July 2016 – May 2018",
    notes: ["Grade: 2.71 (GPA)"],
  },

  {
    degree: "SLC",
    school:
      "Deepshiksha Higher Secondary Boarding School, Dang,(May 2003 - June 2016)",
    period: "May 2003 – June 2016",
    notes: ["Grade: 3.05 (GPA)"],
  },
];

export const certifications = [
  {
    name: "Application Development with Laravel (45 hours) ",
    issuer: "School Of Information Technology",
    date: "August 2022",
  },
];
