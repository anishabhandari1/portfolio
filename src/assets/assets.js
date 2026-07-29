import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.jpg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';

import consoleLogo from './console.png';
import frogLogo from './frog.png';
import keywordLogo from './keyword.png';
import pagespeedLogo from './pagespeed.png';
import ahrefsLogo from './ahrefs.png';
import clickupLogo from './clickup.png';


export const assets = {
    profileImg,
}




export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  }
];



export const toolsData = [
  {
    name: 'Google Search Console',
    logo: consoleLogo
  },
  {
    name: 'Screaming Frog',
    logo: frogLogo
  },
  {
    name: 'Google Ads',
    logo: keywordLogo
  },
  {
    name: 'PageSpeed Insights',
    logo: pagespeedLogo
  },
  {
    name: 'Ahrefs',
    logo: ahrefsLogo
  },
  {
    name: 'Clickup',
    logo: clickupLogo
  }
]

export const projectsData = [
  {
    title: 'Project One',
    description: 'Add a brief summary of this project here.',
    image: projectImg1,
    link: ''
  },
  {
    title: 'Project Two',
    description: 'Add a brief summary of this project here.',
    image: projectImg2,
    link: ''
  },
  {
    title: 'Project Three',
    description: 'Add a brief summary of this project here.',
    image: projectImg3,
    link: ''
  },
  {
    title: 'Project Four',
    description: 'Add a brief summary of this project here.',
    image: projectImg4,
    link: ''
  },
  {
    title: 'Project Five',
    description: 'Add a brief summary of this project here.',
    image: projectImg5,
    link: ''
  },
  {
    title: 'Project Six',
    description: 'Add a brief summary of this project here.',
    image: projectImg6,
    link: ''
  }
];


export const workData = [
  {
    schoolname: "Amrit Science Campus",
    location:" Lainchaur,Kathmandu",
    degree: "Bsc.CSIT",
    duration: "2023-Present",
    description:
      "Pursuing a degree from Tribhuwan University.",
    color: "[#000000]"
  },
  {
    schoolname: "Rehdon College",
    location:"Samakhusi-Kathmandu",
    degree: "Higher Secondary Education",
    duration: "2021-2023",
    description:
      "Completed higher secondary education with a focus on science subjects, laying a strong foundation in mathematics and computer science",
    color: "[#000000]"
  },
  {
   schoolname: "United English School ",
   location:"Mechinagar-1, Jhapa",
   degree: "Secondary Education",
    duration: "2011-2021",
    description:
      "Completed secondary education with a strong foundation in base of mathematics and other subjects, fostering a love for learning and critical thinking.",
    color: "[#000000]" 
  }
];
