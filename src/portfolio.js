const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://gandhipruthvi.github.io/portfolio',
  title: 'PG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pruthvi Gandhi',
  role: 'Full-Stack Developer',
  description:
    'Information Technology background, graduated from Humber College. An Indian guy with great problem-solving skills and who loves to code. Welcome to my portfolio.👋🏽',
  resume:
    'https://docs.google.com/document/d/1CVaLTcWdMephgejRNuSe2kDNqcaZj8ePwrWcACZjixE/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/pruthvigandhi/',
    github: 'https://github.com/gandhipruthvi',
  },
}

const experiences = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    position: 'Web Developer Internship',
    description:
      '• Working with a business for over 4 months to develop a unique application to serve their customers. • Building a web app using WordPress as our CMS, using existing plugins, and creating unique methods and plugins of our own. • Working closely with the CEO to understand his requirements and mainly working on the backend for the team. • Helping other teammates to integrate the project with the database.',
    stack: ['WordPress', 'MySQL', 'Bootstrap', 'HTML', 'JavaScript', 'PHP'],
    employeer: 'Cyglera Health Systems Inc, Niagara Falls, Ontario, Canada',
    duration: 'Jan 2022 - Apr 2022',
  },
  {
    position: 'Juinor PHP Web Developer',
    description:
      '• A core team member, working mainly on the Laravel projects. • Developing Laravel websites and integrating them with front-end frameworks like Vue.js. • Working on different online websites creating platforms such as WordPress, Shopify, and many more. • Creating RESTful services for android applications and deploying websites using different web hosting. • Integrating social media logins for different web applications depending on customer requirements. • Handling the communication with the consumers to meet the website requirements.',
    stack: [
      'AJAX',
      'jQuery',
      'Bootstrap',
      'HTML',
      'JavaScript',
      'PHP',
      'Laravel',
      'MySQL',
      'phpMyAdmin',
    ],
    employeer: 'Daydreamsoft LLP, Surat, Gujarat, India',
    duration: 'Oct 2019 - Jul 2020',
  },
  {
    position: 'Student Internship',
    description:
      "• Created UrbanShiksha website, an online tutoring platform on CodeIgniter as part of my bachelor's final project",
    stack: ['jQuery', 'MySQL', 'Bootstrap', 'JavaScript', 'PHP', 'CodeIgniter'],
    employeer: 'Ashvi Consultancy Service, Surat, Gujarat, India',
    duration: 'Dec 2018 - Apr 2019',
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Best Bid Website',
    description:
      'Developed an online bidding platform in React.js where people can come and easily enjoy the bidding experience without leaving their place. Our website includes a specific system where users can bid on any product at a given minimum price. And as per the original bidding system, we have set up a logic where once the user has set the bid, if after 2 hours no other user is bidding on that product then the product is sold to the last bidder (highest bidder).',
    stack: ['React.js', 'Node.js', 'Express Server', 'MongoDB', 'Bootstrap'],
    sourceCode: 'https://github.com/gandhipruthvi/MERN_Project',
    livePreview: '',
  },
  {
    name: 'Urban Shiksha',
    description:
      'Built a website for students to take online view lectures and take different courses to get certified. Developed a tutor side for tutors to upload their videos explaining different courses and technologies',
    stack: ['PHP', 'MySQL', 'CodeIgniter', 'Bootstrap', 'phpMyAdmin'],
    sourceCode: 'https://github.com/gandhipruthvi/UrbanShiksha',
    livePreview: '',
  },
]

const educations = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    degree: 'Postgraduate with Honours in Information Technology',
    insitution: 'Humber College Institute of Technology & Advanced Learning',
    address: 'Toronto, Ontario, Canada',
    description:
      'Built a website for students to take online view lectures and take different courses to get certified. Developed a tutor side for tutors to upload their videos explaining different courses and technologies',
    date: 'Sep 2020 - Apr 2022',
    grades: '89.9',
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    insitution: 'Veer Narmad South Gujarat University',
    address: 'Surat, Gujarat, India',
    description:
      'Built a website for students to take online view lectures and take different courses to get certified. Developed a tutor side for tutors to upload their videos explaining different courses and technologies',
    date: 'Aug 2016 - Apr 2019',
    grades: '7.34',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'PHP',
  'HTML',
  'CSS',
  'XML',
  'Oracle SQL',
  'SQL',
  'JSON',
  'React',
  'jQuery',
  'Bootstrap',
  'Vue.js',
  'Node.js',
  'Laravel',
  'Express.js',
  'MongoDB',
  'Oracle Database',
  'phpMyAdmin',
  'Firebase',
  'SQL Server',
  'MySQL',
  'WordPress',
  'Java',
  'Python',
  'GIT',
  'Shell Script',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gandhi.pruthvi@gmail.com',
  phone: '+16476071298',
}

const certificates = [
  // certificates can be added an removed
  // if there are no certificates, certificates section won't show up
  {
    certificate: '📜React.js Essential Training - LinkedIn',
    date: 'Jun 2022',
    link: 'https://www.linkedin.com/learning/certificates/703a0ad66cfcfdc32f8a30812ca71d6593166cc342f89e0230c2bd4bc8e8351a?u=2218586',
  },
  {
    certificate: '📜Critical Thinking and Problem Solving - LinkedIn',
    date: 'Sep 2021',
    link: 'https://www.linkedin.com/learning/certificates/a8fe55f80d559fac23d4a20be667b9402c82db030ccf789243d27e7dda78c09d?trk=share_certificate',
  },
  {
    certificate:
      '📜Ethical Hacking: Introduction to Ethical Hacking - LinkedIn',
    date: 'Apr 2021',
    link: 'https://www.linkedin.com/learning/certificates/98d825c9421ed57605d64c4cee9c8bc7e76e3f01f128eaf23ee88f5bbe1b0ac4?trk=share_certificate',
  },
  {
    certificate: '📜Android App Developement for Beginners - Udemy',
    date: 'Mar 2021',
    link: 'https://www.udemy.com/certificate/UC-47d7d9a0-1df7-409d-86a3-355eb4644d65/',
  },
  {
    certificate: '📜Android Studio Essential Training - LinkedIn',
    date: 'Mar 2021',
    link: 'https://www.linkedin.com/learning/certificates/26bc565825cb81b632908c47096fc93c3208a94edc31261a315fc9d3fa674c65?trk=share_certificate',
  },
  {
    certificate:
      '📜Artificial Intelligence Foundations: Thinking Machines - LinkedIn',
    date: 'Mar 2021',
    link: 'https://www.linkedin.com/learning/certificates/1bb505de313804766e76c84462e82a842c32b0a96a032c0d300aa5c8dd6af40d?trk=share_certificate',
  },
  {
    certificate:
      '📜Basics of Artificial Intelligence for Beginners(AI) - Udemy',
    date: 'Mar 2021',
    link: 'https://www.udemy.com/certificate/UC-d89c188c-c858-4481-9512-c3d1cbf703f8/',
  },
  {
    certificate:
      '📜Artificial Intelligence Foundations: Machine Learning - LinkedIn',
    date: 'Feb 2021',
    link: 'https://www.linkedin.com/learning/certificates/0541210998dab478a607bf05b75e94ded363bde6e008808b081f67b4039622cb?trk=share_certificate',
  },
  {
    certificate:
      '🥈2nd Place - GTU Central Techfest (National Level) - C Quiz and Cryptohunt',
    date: 'Feb 2018',
    link: '',
  },
  {
    certificate: '🥈2nd Place - GTU Techfest (Zonal Level) - Crypto Hunt',
    date: 'Mar 2018',
    link: '',
  },
]

export {
  header,
  about,
  experiences,
  projects,
  educations,
  skills,
  contact,
  certificates,
}
