import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    pricewise,
    snapgram,
    summiz,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend"        
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design Tool"
       
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: vuejs,
        name: "Vue.js",
        type: "Frontend"
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Full Stack Web Developer",
        company_name: "Life Choices",
        icon: lifechoices,
        iconBg: "#accbe1",
        date: "April 2024 - Current",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Customer Service Consultant",
        company_name: "Capfin SA PTY LTD",
        icon: capfin,
        iconBg: "#fbc3bc",
        date: "March 2019 - Feb 2023",
        points: [
            "Take calls",
            "Deal with customer queries",
            "Inform customers about their products of the loan",
            "Maintain good client relationship"
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const education = [
    {
        institution: "University of Web Development",
        degree: "Bachelor of Science in Web Development",
        date: "2018 - 2022",
    }
];

export const reviews = [
    {
        reviewer: "John Doe",
        position: "Senior Developer",
        company: "Tech Solutions Inc.",
        testimonial: "Sivelele is an exceptional developer. His attention to detail and problem-solving skills make him a valuable asset to any team. He consistently delivers high-quality code and is always willing to go the extra mile to ensure project success.",
    },
    {
        reviewer: "Jane Smith",
        position: "Product Manager",
        company: "Innovate Tech",
        testimonial: "I had the pleasure of working with Sivelele on a complex web project. His expertise in frontend and backend development was evident throughout the project lifecycle. He communicates effectively, meets deadlines, and exceeds expectations. I highly recommend him for any web development role.",
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SiveleleN',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/sivelele-nkamane-10336a271',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Capstone Full Stack Eco',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        LiveUrl: 'https://capstone-5f5db.web.app/',
        GithubUrl: 'https://github.com/SiveleleN/Capston_Project'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Netflix',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        LiveUrl: 'https://voluble-panda-b81de2.netlify.app/',
        GithubUrl: 'https://github.com/SiveleleN/Netflix'
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Ecommerce',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        LiveUrl: 'https://candid-unicorn-aaf34a.netlify.app/',
        GithubUrl: 'https://github.com/SiveleleN/e-commerceSite'
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Temperature Converter',
        description: 'Created a temperature converter',
        LiveUrl: 'https://peppy-melba-17c508.netlify.app/',
        GithubUrl: 'https://github.com/SiveleleN/Temperature-'
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Calculator',
        description: 'Created a function calculator using JavaScrip',
        LiveUrl: 'https://thunderous-empanada-e719eb.netlify.app/',
        GithubUrl: 'https://github.com/SiveleleN/Calc-and-keyboard'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'BIM Calculator',
        description: `Stay organized and productive with our intuitive to-do list app. Easily create, edit, and delete tasks, customize your to-do list with priority levels, due dates, and categorization, and stay up-to-date across devices. Say goodbye to forgotten tasks and hello to productivity today.
                     write it in a form where I was the one who created this app`,
        LiveUrl: 'https://dulcet-scone-2c3a23.netlify.app/',
        GithubUrl: 'https://github.com/SiveleleN/bmiCal'
    }
];

