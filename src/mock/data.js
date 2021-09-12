import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrew Han | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal portfolio!', // e.g: Welcome to my website
};

// TODO: Add ROLE field to change color of `Software Developer`
// HERO DATA
export const heroData = {
  title: 'Hey! My name is',
  name: 'Andrew',
  subtitle: "I'm a Software Developer",
  cta: "Let's get acquainted!",
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: `Hey! You already know I'm a software developer from the title, but that's really just one of the ways I express my insatiable desire
                 for learning. I'm really a student, both literally and figuratively, and I love to learn. Computer science was an obvious choice for me
                 with its low barrier of entry and unimaginable level of depth. Not only do I enjoy its endless array of new technologies to spend my mornings, afternoons, and evenings pursuing,
                 but its community has also allowed me to hone my communication and leadership skills. I'll never forgot my first hackathon all-nighter nor will I forgot the first
                 time I was able to answer somebody else's programming question.`,
  paragraphTwo: `Computer science has truly given me many great opportunities, memories, and friends. As a result, I continuously strive towards improving upon my
                 knowledge and skills in the field so that I can not only give back to the community, but also apply the things I have learned towards tackling
                 real problems that affect people around the world`,
  paragraphThree: `When I'm not programming away on my laptop, you'll most likely find me playing on the nearest volleyball court, learning new tricks at the local skate park,
                   or relaxing in bed with a good book or show`,
  resume: 'https://drive.google.com/file/d/1PihHEe10wwFAAKfFHdtzzs77QVOzHiwa/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
// TODO: IMPLEMENT SECTION & STYLING FOR TECH STACK
// TODO: UPDATE FONT-STYLE TO MAKE IT MORE READABLE (kinda difficult to read atm)
export const projectsData = [
  {
    id: nanoid(),
    img: 'personal-portfolio.PNG',
    title: 'Portfolio Website',
    date: 'Aug 2021', // date at which the project was completed
    info: `Github & LinkedIn are cool and all, but a personal portfolio website offers an unparalleled freedom of self-expression.`,
    info2: `With that being said, hopefully this portfolio of mine gives you an insight towards who I am! Feel free to poke around. :)`,
    isPortfolioProject: true,
    url: '',
    repo: 'https://github.com/Fandrew44/Portfolio', // if no repo, the button will not show up,
    techstack: '',
  },
  {
    id: nanoid(),
    mobileImage: 'todo-cal.PNG',
    title: 'Todo Scheduler (Launchpad)',
    date: 'Apr 2021', // date at which the project was completed
    info: `Ever felt overwhelmed by a mountain of things you need to finish without a single clue on where to start?`,
    info2: `This mobile app will
            help you combat that sense of doom and gloom by helping you keep track of all the tasks you need to accomplish. Even more, it
            displays all information in a neat and easily understandable calendar format to encourage better prioritization and time management habits.`,
    url: '',
    repo: 'https://github.com/Fandrew44/todo-scheduler', // if no repo, the button will not show up,
    techstack: '',
  },
  {
    id: nanoid(),
    img: 'benny-beaver.PNG',
    title: 'Benny Beaver',
    date: 'February 2021',
    info: '"Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it is the only thing that ever has." - Margaret Mead',
    info2: `A Hackathon project stemmed from our group's collective desire to reduce unnecessary waste and to raise environmental awareness
            in the form of an entertaining and educational game. By itself it won't change the world, but it's a step in the right direction.`,
    url: 'https://devpost.com/software/bennybeaver2010',
    repo: 'https://github.com/Fandrew44/BennyBeaver2010', // if no repo, the button will not show up,
    techstack: '',
  },
  {
    id: nanoid(),
    img: 'aimtrainer.PNG',
    title: 'Aim Trainer',
    date: 'Jan 2021',
    info: `A web app developed to assist both aspiring FPS professionals as well as those looking to improve their coordination skills.
           Motivates players by clearly presenting their current session's statistics, allowing them to recognize their areas of improvement.`,
    info2: 'Feel free to give it a shot! Pun very much intended :)',
    url: 'https://www.aimframe.xyz/',
    repo: 'https://github.com/Fandrew44/Aimframe', // if no repo, the button will not show up,
    techstack: '',
  },
  {
    id: nanoid(),
    mobileImage: 'time-tracker.PNG',
    title: 'Time Tracker (Launchpad)',
    date: 'Dec 2020',
    info: "When your focus is jumping from one task to another without break, it's easy to lose track of the time and for your attention to waver.",
    info2: `This mobile app is designed to simplify the process of keeping track of the time spent on a specific task, allowing the user to devote
            their energy towards performing their best. In addition, it visualizes the user's data in an engaging and readable manner to allow for
            easy understanding of specific areas to improve on.`,
    url: '',
    repo: 'https://github.com/Fandrew44/time-tracker', // if no repo, the button will not show up,
    techstack: '',
  },
  {
    id: nanoid(),
    img: 'ubc-realtime-courses-api.PNG',
    title: 'UBC Realtime Courses API',
    date: 'Aug 2020',
    info: 'The UBC course searcher is...not the best, putting it politely.',
    info2: `That's why my friends and I developed this UBC courses API that not only makes course data easily accessible to both
            students and developers, but it also retrieves the data in real time!`,
    url: 'https://docs.ubccourses.com/',
    repo: 'https://github.com/Fandrew44/realtime-ubc-courses-api', // if no repo, the button will not show up,
    techstack: '',
  },
  {
    id: nanoid(),
    img: 'planr.PNG',
    title: 'PlanR',
    date: 'Jul 2020',
    info: 'Vacations are a time for fun and relaxation, so why do we bother debating so much about which attraction to visit or which restaurant to eat at?',
    info2: `This Hackathon project in the form of a web app allows travelers to input their own individual preferences in multiple categories, from favourites foods
            to must visit attractions. It then creates the perfect travel itinerary for the group based off of each of their choices!`,
    url: 'https://devpost.com/software/planr-zl40yo',
    repo: 'https://github.com/Fandrew44/PlanR', // if no repo, the button will not show up,
    techstack: '',
  },
  {
    id: nanoid(),
    img: 'money-motion.PNG',
    title: 'MoneyMotion',
    date: 'Apr 2020',
    info: 'University students are infamously known for making poor financial decisions, but there is hope.',
    info2: `This desktop app helps students to keep track of their financial transactions so that they don't have to. By removing
            the burden of manually tracking their own transactions, it allows students to focus more towards their studies and less on worrying
            about the $12 burger they just ate.`,
    url: '',
    repo: 'https://github.com/Fandrew44/MoneyMotion', // if no repo, the button will not show up,
    techstack: '',
  },
];

// EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    logo: 'FISPAN_logo.jpg', // company logo (image)
    organization: 'FISPAN', // company name
    duration: 'Jan 2021 - Aug 2021', // time spent in the position
    position: 'Software Development Intern', // job title
    description: `- Developed new payment rails in different bank specifications (NACHA, IFX, ISO, etc.) using Spring Framework, Java, and Kotlin 
                  - Implemented user-friendly internal UI tools to enable 130+ operations & engineering members to efficiently troubleshoot newly released features using React, Redux, and RambdaJS
                  - Engineered a CI/CD pipeline to fully automate the publishing of API documentation directly served to clients using Gitlab and Docker
                  - Increased test coverage by 23% through unit, integration, and end-to-end test suites using JUnit,Spek, and Mockito`, // job description
    url: 'https://fispan.com/', // company website link
  },
  {
    id: nanoid(),
    logo: 'UBC_launchpad_logo.jpg', // company logo (image)
    organization: 'UBC Launchpad', // company name
    duration: 'Sept 2020 - Apr 2021', // time spent in the position
    position: 'Software Developer', // job title
    description: `- Developed innovative apps aimed towards improving ones time management and organizational skills using Flutter, Dart, and Android Studio
                  - Engaged in weekly team discussions and lead the initiative in implementing new ideas and features
                  - Presented designs and implementation to the entire organization of 50+ members`, // job description
    url: 'https://ubclaunchpad.com/', // company website link
  },
  {
    id: nanoid(),
    logo: 'UBC_logo.jpg', // company logo
    organization: 'The University of British Columbia', // company name
    duration: 'Sept 2020 - Dec 2020', // time spent in the position
    position: 'CS Teaching Assistant', // job title
    description: `- Supervised multiple lab and tutorial sections in CPSC 210 (Software Construction focusing on Java & OOP)
                  - Clarified questions and confusing topics in live and online forum office hours
                  - Provided constructive feedback & guidance for students' final term project`, // job description
    url: 'https://www.cs.ubc.ca/', // company website link
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Project ideas? Work opportunities? Good memes? I'm interested!",
  btn: "Let's Chat!",
  email: 'ahgreeting@gmail.com',
};

// FOOTER DATA
// TODO; UPDATE FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andrew-han-a57a5b1a9/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Fandrew44',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/ayj.han/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
