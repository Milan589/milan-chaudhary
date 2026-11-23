export const profile = {
  name: "Milan Chaudhary",
  title: "Full-Stack Developer",
  tagline:
    "I build reliable and user-friendly web applications to solve complex problems.",
  location: "Lalitpur, Nepal",
  company: "IT Hive Solutions Pvt. Ltd.",
  avatar: "", // e.g. "/profile.jpg" (file in /public). Leave empty to show initials.
  cvPdf: "/cv.pdf", // put your CV in /public/cv.pdf
  email: "milanchaudhary589@gmail.com",
  github: "https://github.com/Milan589",
  linkedin: "https://www.linkedin.com/in/milan-chaudhary-5b0a1921b",
  about: [
    "A passionate Full-Stack Developer with knowledge of web and mobile application development. ",
    "Experienced in working with Next.js, React.js, TypeScript, Laravel, PHP, and databases such as PostgreSQL, MySQL, MongoDB, and Supabase. Hardworking and eager to learn new technologies, with the ability to research and find effective solutions to problems. Always focused on improving technical skills and building reliable, user-friendly applications.",
  ],
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
    period: "Jan 2024 – May 2024",
    role: "Full-Stack Developer",
    summary:
      "A web-based system for managing school information and evaluating schools based on their facilities, services, and infrastructure.",
    overview:
      "Developed a school rating system for Mahalaxmi Municipality to maintain school records and evaluate their overall performance. Schools are assessed based on different criteria and awarded marks to determine their ratings.",
    highlights: [
      "Developed school information and record management modules.",
      "Implemented evaluation and grading based on school facilities and services.",
      "Created dashboards to manage school details and assessment results.",
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
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "PHP", "SQL"] },
  {
    group: "Frontend",
    items: ["React", "Next.js (App Router)", "HTML", "CSS"],
  },
  { group: "Backend", items: ["Node.js", "Laravel", "REST APIs", "Zod"] },
  { group: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"] },
  { group: "Auth and tools", items: ["Clerk", "Git", "GitHub"] },
];

export const education = [
  {
    degree: "Bachelors in Computer Science and Information Technology",
    school:
      "Orchid International College, Tribhuvan University, (November 2018 - August 2023)",
    period: "November 2018 – August 2023",
    notes: [
      "Grade: First Division (71.40%)",
      "Dissertation: Handwritten Digit Recognition from License Plates for Low Resource Language (Nepali)",
    ],
  },
  {
    degree: "+2 in Science (Physics, Chemistry, Mathematics)",
    school: "Padmodaya Public Model Secondary School, (July 2016 - May 2018)",
    period: "July 2016 – May 2018",
    notes: ["Grade: 2.71 (GPA)"],
  },

  {
    degree: "SLC",
    school:
      "Deepshiksha Higher Secondary Boarding School, (May 2003 - June 2016)",
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
  // { name: "Certificate name", issuer: "Issuer", date: "Month Year" },
  // { name: "Certificate name", issuer: "Issuer", date: "Month Year" },
];
