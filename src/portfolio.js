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
    'https://drive.google.com/file/d/19MxCvaBpJTS3K_AAIrmRvIJ6pIsMUOkm/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/pruthvigandhi/',
    github: 'https://github.com/gandhipruthvi',
  },
  stack: [
    {
      name: 'React.js',
      icon: 'fa-brands fa-react fa-3x',
      color: '#4cd8fc',
    },
    {
      name: 'Node.js',
      icon: 'fa-brands fa-node-js fa-3x',
      color: '#24B35D',
    },
    {
      name: 'Databases',
      icon: 'fa-solid fa-database fa-3x',
      color: '#4cd8fc',
    },
    {
      name: 'Bootstrap',
      icon: 'fa-brands fa-bootstrap fa-3x',
      color: '#6D11EE',
    },
    {
      name: 'HTML 5',
      icon: 'fa-brands fa-html5 fa-3x',
      color: '#E44D26',
    },
    {
      name: 'CSS 3',
      icon: 'fa-brands fa-css3 fa-3x',
      color: '#6563FF',
    },
    {
      name: 'Javascript',
      icon: 'fa-brands fa-js-square fa-3x',
      color: '#F0DB4F',
    },
    {
      name: 'Python',
      icon: 'fa-brands fa-python fa-3x',
      color: '#3572A3',
    },
    {
      name: 'Android',
      icon: 'fa-brands fa-android fa-3x',
      color: '#2DDF84',
    },
    {
      name: 'Swift',
      icon: 'fa-brands fa-swift fa-3x',
      color: '#F05237',
    },
    {
      name: 'Github',
      icon: 'fa-brands fa-github fa-3x',
      color: '#181616',
    },
  ],
}

const experiences = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    position: 'Web Developer Internship',
    description:
      '• Working with a business for over 4 months to develop a unique application to serve their customers. • Building a web app using WordPress as our CMS, using existing plugins, and creating unique methods and plugins of our own. • Working closely with the CEO to understand his requirements and mainly working on the backend for the team. • Helping other teammates to integrate the project with the database.',
    employeer: 'Cyglera Health Systems Inc, Niagara Falls, Ontario, Canada',
    duration: 'Jan 2022 - Apr 2022',
  },
  {
    position: 'Juinor PHP Web Developer',
    description:
      '• A core team member, working mainly on the Laravel projects. • Developing Laravel websites and integrating them with front-end frameworks like Vue.js. • Working on different online websites creating platforms such as WordPress, Shopify, and many more. • Creating RESTful services for android applications and deploying websites using different web hosting. • Integrating social media logins for different web applications depending on customer requirements. • Handling the communication with the consumers to meet the website requirements.',
    employeer: 'Daydreamsoft LLP, Surat, Gujarat, India',
    duration: 'Oct 2019 - Jul 2020',
  },
  {
    position: 'Student Internship',
    description:
      "• Created UrbanShiksha website, an online tutoring platform on CodeIgniter as part of my bachelor's final project",
    employeer: 'Ashvi Consultancy Service, Surat, Gujarat, India',
    duration: 'Dec 2018 - Apr 2019',
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Best Bid',
    description:
      '• Developed a website that took the bidding experience from in-person to online. The pandemic gave us the idea to recreate the bidding system, where people can easily enjoy bidding from their homes.•	Leading a team of 5 people, we created the rules which would replicate the official bidding system but made it more flexible.•	Implemented a rule where 2 hours is the winning time difference, minimum price increase, and fixed starting amount.•	Architected the whole front-end design in React.js, engineered a REST API in Express.js, and hosted the website on Heroku.',
    stack: [
      {
        name: 'React.js',
        icon: 'fa-brands fa-react fa-3x',
        color: '#4cd8fc',
      },
      {
        name: 'Node.js',
        icon: 'fa-brands fa-node-js fa-3x',
        color: '#24B35D',
      },
      {
        name: 'MongoDB',
        icon: 'fa-solid fa-database fa-3x',
        color: '#4cd8fc',
      },
      {
        name: 'Bootstrap',
        icon: 'fa-brands fa-bootstrap fa-3x',
        color: '#6D11EE',
      },
    ],
    sourceCode: 'https://github.com/gandhipruthvi/MERN_Project',
    livePreview: '',
  },
  {
    name: 'Calisthenics',
    description:
      '•	With a team of 5 people, we assembled a fitness app that focused on exercising using our body weight.•	Having a fit and healthy body increases brain functioning by 2 times, hence we developed an app using which people can exercise in their homes without any equipment.•	 Implemented features like a detailed schedule for personal workouts depending on the measurements of the body, video representation of exercises for better understanding, receiving awards on successful completion of routines, and sharing the achievements with your friends on social media.',
    stack: [
      {
        name: 'Android',
        icon: 'fa-brands fa-android fa-3x',
        color: '#2DDF84',
      },
      {
        name: 'Java',
        icon: 'fa-brands fa-java fa-3x',
        color: '#507E9B',
      },
      {
        name: 'Firebase',
        icon: 'fa-solid fa-fire fa-3x',
        color: '#F74803',
      },
    ],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Urban Shiksha',
    description:
      '•	Coded an online tutoring platform where students can learn from tutors around the world.•	Segregated the website into 2 parts, the student portal and the tutor portal.•	Implemented MVC architecture, with online video viewing capabilities.•	Integrated a payment system that would motivate tutors to create more content helping students to learn things.',
    stack: [
      {
        name: 'PHP',
        icon: 'fa-brands fa-php fa-3x',
        color: '#7377AD',
      },
      {
        name: 'database',
        icon: 'fa-solid fa-database fa-3x',
        color: '#4cd8fc',
      },
      {
        name: 'Bootstrap',
        icon: 'fa-brands fa-bootstrap fa-3x',
        color: '#6D11EE',
      },
    ],
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
    description: '',
    date: 'Sep 2020 - Apr 2022',
    grades: '89.9 GPA',
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    insitution: 'Veer Narmad South Gujarat University',
    address: 'Surat, Gujarat, India',
    description: '',
    date: 'Aug 2016 - Apr 2019',
    grades: '7.34 GPA',
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
