import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrew Han | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal portfolio!', // e.g: Welcome to my website
};

//TODO: Add ROLE field to change color of `Software Developer`
// HERO DATA
export const heroData = {
  title: 'Hey! My name is',
  name: 'Andrew',
  subtitle: 'I\'m a Software Developer',
  cta: 'Let\'s get acquainted!',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
//TODO: IMPLEMENT SECTION & STYLING FOR TECH STACK
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Todo Scheduler',
    date: '', //date at which the project was completed
    info: 'can you see dis',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up,
    techstack: ''
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Benny Beaver',
    date: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up,
    techstack: ''
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Aim Trainer',
    date: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up,
    techstack: ''
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Todo Calendar',
    date: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up,
    techstack: ''
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Time Tracker',
    date: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up,
    techstack: ''
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'PlanR',
    date: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up,
    techstack: ''
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'UBC Realtime Courses API',
    date: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up,
    techstack: ''
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'MoneyMotion',
    date: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up,
    techstack: ''
  },
];

//EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    logo: 'FISPAN_logo.jpg', //company logo (image)
    organization: 'FISPAN', //company name
    duration: 'Jan 2021 - Aug 2021', //time spent in the position
    position: 'Software Development Intern', //job title
    description: 'me code monkey oo oo aah aah', //job description
    url: 'https://fispan.com/' //company website link
  },
  {
    id: nanoid(),
    logo: 'UBC_launchpad_logo.jpg', //company logo (image)
    organization: 'UBC Launchpad', //company name
    duration: 'Sept 2020 - Apr 2021', //time spent in the position
    position: 'Software Developer', //job title
    description: 'code gang yuh', //job description
    url: 'https://ubclaunchpad.com/' //company website link
  },
  {
    id: nanoid(),
    logo: 'UBC_logo.jpg', //company logo
    organization: 'The University of British Columbia', //company name
    duration: 'Sept 2020 - Dec 2020', //time spent in the position
    position: 'CS Teaching Assistant', //job title
    description: 'me teach people how to code yay', //job description
    url: 'https://www.cs.ubc.ca/' //company website link
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Project ideas? Work opportunities? Quality memes? I\'m interested!',
  btn: 'Let\'s Chat!',
  email: 'ahgreeting@gmail.com',
};

// FOOTER DATA
//TODO; UPDATE FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
