import React from 'react';
import profile from "./aboutphoto.png"
import profnitt from "./profnitt.png"
import sigma from "./sigma.png"
import pragyan from "./pragyan.png"
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '#home',
    text: 'home',
  },
  {
    id: 2,
    url: '#about',
    text: 'about',
  },
  {
    id: 3,
    url: '#experience',
    text: 'experience',
  },
  {
    id: 4,
    url: '#projects',
    text: 'projects',
  },
  {
    id: 5,
    url: '#contact',
    text: 'contact',
  }
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];
export const about = [
  {
    id:1,
    name: 'Rohit Giratkar',
    src : profile,
    info: "I'm Rohit Giratkar, a student at NIT Trichy, pursuing BTech with a passion for computer science. I'm also minoring in computer science. My goal is to become a Software Development Engineer (SDE) and innovate in technology. I excel in Competitive Programming, which strengthened my algorithmic skills. I'm proficient in web development, with skills in HTML, CSS, JavaScript, and React, enabling me to create interactive web applications. My academic journey, along with practical skills, has prepared me for a career in software development, and I'm eager to learn and grow in this field.",
  }
];

export const experience = [
  {
    id:1,
    name: 'profnitt',
    role: 'manager',
    type: 'part-time',
    date: 'Sep 2022 - present',
    info: "As the Manager at ProfNITT Club, I led sessions on diverse investment strategies, conducted a comparative analysis of FII and DII, and actively contributed to the FundEx Team for stock analysis and trades. Additionally, I managed venue bookings for club activities and am currently involved in developing the club's website.",
    src: profnitt,
  },
  {
    id:2,
    name: 'pragyan',
    role: 'coordinator',
    type: 'part-time',
    date: 'Sep 2022 - present',
    info: "As the Coordinator of the Organizing Committee for Pragyan'23, an international techno-management festival at NIT Trichy, I managed event-related procurement to ensure seamless event execution. I also played a crucial role in the Disciplinary Committee (Disco), contributing to the overall success and smooth operation of the festival.",
    src: pragyan,
  },
  {
    id:3,
    name: 'sigma',
    role: 'deputy manager',
    type: 'part-time',
    date: 'oct 2022 - jun 2023',
    info: "As a Deputy Manager at NIT Trichy's Sigma Business Club, I played a pivotal role in the Finance Team, managing financial projects and content creation for social media. I gained expertise in taxation through a significant project and enhanced my finance knowledge by participating in online quizzes and case study competitions.",
    src: sigma,
  },
];

export const Projects =[
  {
    id: 1,
    name: 'grid blinking game',
    tech: 'html , css , javascript',
    date: 'June 2023- June-2023',
    info: ["Developed an engaging web-based grid game using HTML, CSS, and JavaScript that tests users' memory and dexterity through a randomized sequence of blinking grid cells.",
  "Implemented adaptable difficulty levels (easy, medium, and hard) to cater to a diverse audience, ensuring inclusivity and engagement.",
"Enhanced user immersion with sleek dark and light modes, and provided a polished 'Game Over' notification for a captivating and interactive gaming experience, showcasing proficiency in front-end development and user-centered design."],
  },
  {
    id: 2,
    name: 'portfolio website',
    tech: 'html , css , javascript and react',
    date: 'Nov 2023 - Present',
    info: ["Developed an engaging web-based grid game using HTML, CSS, and JavaScript that tests users' memory and dexterity through a randomized sequence of blinking grid cells.",
  "Implemented adaptable difficulty levels (easy, medium, and hard) to cater to a diverse audience, ensuring inclusivity and engagement.",
"Enhanced user immersion with sleek dark and light modes, and provided a polished 'Game Over' notification for a captivating and interactive gaming experience, showcasing proficiency in front-end development and user-centered design."],
  }
];