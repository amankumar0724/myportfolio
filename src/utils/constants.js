import cLogo from '../assets/cLogo.png'
import collegeLogo from '../assets/collegeLogo.jpg'
import cppLogo from '../assets/cppLogo.png'
import cssLogo from '../assets/cssLogo.png'
import expressLogo from '../assets/expressLogo.png'
import firebaseLogo from '../assets/firebaseLogo.png'
import githubLogo from '../assets/githubLogo.png'
import gitLogo from '../assets/gitLogo.png'
import htmlLogo from '../assets/htmlLogo.png'
import javascriptLogo from '../assets/javascriptLogo.png'
import materialuiLogo from '../assets/materialuiLogo.png'
import mongodbLogo from '../assets/mongodbLogo.png'
import mysqlLogo from '../assets/mysqlLogo.png'
import nodejsLogo from '../assets/nodejsLogo.png'
import postmanLogo from '../assets/postmanLogo.png'
import reactjsLogo from '../assets/reactjsLogo.png'
import reduxLogo from '../assets/reduxLogo.png'
import schoolLogo from '../assets/schoolLogo.png'
import tailwindcssLogo from '../assets/tailwindcssLogo.png'
import vscodeLogo from '../assets/vscodeLogo.png'
import thinksyncLogo from '../assets/thinksyncLogo.png'
import chitchatLogo from '../assets/chitchatLogo.jpg'
import renderLogo from '../assets/renderLogo.jpeg'
import unifiedLogo from '../assets/unifiedLogo.png'
import javaLogo from '../assets/javaLogo.png'
import pythonLogo from '../assets/pythonLogo.png'
import appwriteLogo from '../assets/appwriteLogo.png'


// project images 
import thinksync1 from '../assets/Project_Images/Thinksync_1.png'
import thinksync2 from '../assets/Project_Images/Thinksync_2.png'
import thinksync3 from '../assets/Project_Images/Thinksync_3.png'
import thinksync4 from '../assets/Project_Images/Thinksync_4.png'
import thinksync5 from '../assets/Project_Images/Thinksync_5.png'
import accident1 from '../assets/Project_Images/AccidentDetection_1.jpg'
import accident2 from '../assets/Project_Images/AccidentDetection_2.jpg'
import accident3 from '../assets/Project_Images/AccidentDetection_3.jpg'
import accident4 from '../assets/Project_Images/AccidentDetection_4.jpg'
import accident5 from '../assets/Project_Images/AccidentDetection_5.jpg'
import accident6 from '../assets/Project_Images/AccidentDetection_6.jpg'
import chitchat1 from '../assets/Project_Images/ChitChat_1.jpg'
import chitchat2 from '../assets/Project_Images/ChitChat_2.jpg'
import chitchat3 from '../assets/Project_Images/ChitChat_3.jpg'

// coming soon
import coming_soon_icon from '../assets/Icons/coming_soon_icon.png'

export const skillsData = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Appwrite', logo: appwriteLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Render', logo: renderLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      logo: collegeLogo,
      school: "Indian Institute of Information Technology, Allahabad",
      duration: "November 2022 - Present",
      grade: "8.55 CGPA",
      desc: "I am pursuing a Bachelor of Technology in Electronics and Communication  Engineering.",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
    },
    {
      id: 1,
      logo: schoolLogo,
      school: "St. Dominic's Academy, Shikohabad",
      duration: "Apr 2019 - March 2021",
      grade: "96.4%",
      desc: "I completed my class 12 education from St. Dominic's Academy, Shikohabad, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      logo: schoolLogo,
      school: "St. Dominic's Academy, Shikohabad",
      duration: "Apr 2018 - March 2019",
      grade: "95.6%",
      desc: "I completed my class 10 education from St. Dominic's Academy, Shikohabad, under the CBSE board.",
      degree: "CBSE(X) with Computer Science",
    },
  ];
  
  export const projectsData = [
    {
      id: 0,
      title: "ThinkSync - Blog website",
      type: "Website",
      description:
        "Developed a full-stack blog web application using React.js, Node.js, Express.js, and MongoDB with a focus on seamless user experience. The frontend features a responsive and intuitive UI built with Material UI, HTML/CSS, and JavaScript. RESTful APIs were created using Express.js and tested with Postman to handle CRUD operations for blogs and comments. Implemented JWT-based authentication for secure user sign-up, sign-in, and authorization. ",
      image: thinksyncLogo,
      images:[
        thinksync1,
        thinksync2,
        thinksync3,
        thinksync4,
        thinksync5,
      ],
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Express JS", "Node JS", "MongoDb", "Material UI", "Cloudinary", "RESTful APIs"],
      githubLink: "https://github.com/amankumar0724/mernProject/tree/master",
      demoLink: "https://thinksync-think-write-sync.onrender.com/",
    },
    {
      id: 1,
      title: "Chit Chat",
      type: "Android",
      description:
        "Developed a real-time chat application with a user-centric UI/UX and a secure, scalable backend. Built using Java and Firebase, the app ensures smooth performance and real-time synchronization across devices. Implemented OTP-based mobile authentication to significantly reduce unauthorized access. Secure storage and retrieval of images and messages were handled through Firebase Firestore., while Firebase Cloud Messaging (FCM) was integrated to enable instant push notifications and enhance user engagement.",
      image: chitchatLogo,
      images:[
        chitchat1,
        chitchat2,
        chitchat3,
      ],
      tags: [" Java", "Firebase", "Firebase Firestore", "Firebase Cloud Messaging"],
      githubLink: "https://github.com/amankumar0724/ChitChat/tree/master",
      demoLink: "",
    },
    {
      id: 2,
      title: "Accident Detection App",
      type: "Android",
      description:
        "Developed an Android-based Accident Detection App that listens for SMS messages containing GPS coordinates and automatically opens the location in Google Maps. The app features real-time SMS processing using a BroadcastReceiver. Integrated Google Maps via intent-based navigation to visualize accident locations. Implemented robust parsing logic to extract latitude and longitude from the message body. Additionally, a custom notification system using Firebase-style toast-like alerts was created to enhance user awareness. ",
      image: "",
      images:[
        accident1,
        accident2,
        accident3,
        accident4,
        accident5,
        accident6,
      ],
      tags: [" Android", "BroadcastReceiver", "Google Maps", "Firebase"],
      githubLink: "https://github.com/amankumar0724/Accident_Detection_App/tree/main/trial2",
      demoLink: "",
    },
    {
      id: 3,
      title: "Desktop Assistant",
      type: "Others",
      description:
        "Customized a Python-based virtual assistant to enable efficient task management through voice commands. Integrated speech-to-text and text-to-speech capabilities using SpeechRecognition and pyttsx3 to facilitate seamless communication. A responsive media player was developed using Pygame for smooth audio playback, while OpenCV (CV2) was used to implement camera control features. Additionally, system process management was optimized with psutil, allowing users to pause, resume, and terminate processes with ease.",
      image: "",
      images:[
        coming_soon_icon,
      ],
      tags: [" Python", "SpeechRecognition", "pyttsx3", "Pygame", "OpenCV"],
      githubLink: "https://github.com/amankumar0724/Desktop-Assistant-Jarvis",
      demoLink: "",
    },
  ];  

  export const experience = [
    {
      id: 0,
      role: "Web Developer Intern",
      company: "Unified Mentor",
      companyLogo: unifiedLogo,
      description: "Currently developing a Clinic Management System website for Unified Mentor using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a responsive, user-friendly interface, secure JWT-based authentication, and role-based access control to ensure efficient and secure interaction for both patients and healthcare providers.",
      duration: "May 2025 - Present",
      tags: ["HTML", "CSS", "TailwindCSS","React JS", "Express JS", "Node JS", "MongoDb"],
    },
    // {
    //   id: 1,
    //   role: "Web Developer Intern",
    //   company: "Unified Mentor",
    //   companyLogo: unifiedLogo,
    //   description: "Currently developing a Clinic Management System website for Unified Mentor using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a responsive, user-friendly interface, secure JWT-based authentication, and role-based access control to ensure efficient and secure interaction for both patients and healthcare providers.",
    //   duration: "May 2025 - Present",
    //   tags: ["HTML", "CSS", "TailwindCSS","React JS", "Express JS", "Node JS", "MongoDb"],
    // },
    // {
    //   id: 2,
    //   role: "Web Developer Intern",
    //   company: "Unified Mentor",
    //   companyLogo: unifiedLogo,
    //   description: "Currently developing a Clinic Management System website for Unified Mentor using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a responsive, user-friendly interface, secure JWT-based authentication, and role-based access control to ensure efficient and secure interaction for both patients and healthcare providers.",
    //   duration: "May 2025 - Present",
    //   tags: ["HTML", "CSS", "TailwindCSS","React JS", "Express JS", "Node JS", "MongoDb"],
    // },
  ];