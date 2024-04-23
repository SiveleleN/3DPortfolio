import { bmi, calc, capstone, ecom, neflix, temp, aza, brand, candice, matt, seth, thy } from "../assets/images/";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs
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
];

export const education = [
    {
        institution: "Life Choices Academy",
        course: "Full Stack Developer",
        date: "2023 - 2024",
    },
    {
        institution: "Luvumelwano S S S",
        course: "Nation Senior Certificate",
        date: "2016",
    }
];

export const reviews = [
    {
        imageUrl: matt,
        theme: 'btn-back-red',
        name: "Matthew Dean Brown",
        testimonial: "Sivelele has left me impressed by her dedication and creativity. She will complete any project she attempts to the best of her ability. Sivelele will always strive to give her best."
    },
    {
        imageUrl: candice,
        theme: 'btn-back-red',
        name: "Candice Amon",
        testimonial: "Sivelele was a pleasure to work with because she always lightened the mood during challenging projects with her sense of humor. She dedicated herself to completing every task to the highest standard. Her honesty and ownership of her work were refreshing to see. She persevered through obstacles and consistently sought out opportunities to grow both personally and professionally. Her positive attitude and exceptional work ethic are sure to bring success wherever she goes. I highly recommend Sivelele for any future endeavors. If you require further information, please don't hesitate to contact me."
    },
    {
        imageUrl: seth,
        theme: 'btn-back-red',
        name: "Seth Tobias",
        testimonial: "Sivelele is an amazingly hardworking individual. She puts her all into the task at hand. She often loses her temper due to frustration. However, she doesn't let it stop her from completing the task at hand. It also showcases how much passion she has to complete the tasks she set her mind on. Outside of work, Sivelele is a very friendly and is easy to talk to. Sivelele would be an amazing asset to any organization."
    },
    {   
        imageUrl: thy,
        theme: 'btn-back-red',
        name: "Tyhiesha Johnson",
        testimonial: "Sivelele has great spirit when it comes to perseverance. She's an amazing leader and team player, while remaining modest and calm. She brings light into our day and helps whenever she can. She'll make a great addition to any team of her choice."
    },
    {
        imageUrl: brand,
        theme: 'btn-back-red',
        name: "Brandon Roustone",
        testimonial: "Sivelele's relentless passion for software development is truly admirable. Her unwavering commitment to refining her skills and becoming proficient in various coding languages is incredibly inspiring. She tackles tasks with a unique creative perspective, combining a sharp eye for both design and functionality. Her dedicated approach serves as a beacon for those seeking to master the craft of software development."
    },
    {   
        imageUrl: aza,
        theme: 'btn-back-red',
        name: "Azasiphe Ndoro",
        testimonial: "Sivelele's relentless passion for software development is truly admirable. Her unwavering commitment to refining her skills and becoming proficient in various coding languages is incredibly inspiring. She tackles tasks with a unique creative perspective, combining a sharp eye for both design and functionality. Her dedicated approach serves as a beacon for those seeking to master the craft of software development."
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
        imageUrl: capstone,
        theme: 'btn-back-red',
        name: 'Capstone Full Stack Eco',
        description: 'I am thrilled to have created a full-stack website as my latest project. It is a true testament to the power of hard work, determination, and creativity. The website is a shining example of how we can turn our ideas into reality and make a positive impact on the world around us.',
        LiveUrl: 'https://capstone-5f5db.web.app/',
        GithubUrl: 'https://github.com/SiveleleN/Capston_Project'
    },
    {
        imageUrl: neflix,
        theme: 'btn-back-green',
        name: 'Netflix',
        description: 'I successfully cloned this website as part of a task where we were required to replicate Netflix and make it live.',
        LiveUrl: 'https://voluble-panda-b81de2.netlify.app/',
        GithubUrl: 'https://github.com/SiveleleN/Netflix'
    },
    {
        imageUrl: ecom,
        theme: 'btn-back-blue',
        name: 'Ecommerce',
        description: 'This project was a true test of my abilities, but I embraced the challenge and persevered.',
        LiveUrl: 'https://candid-unicorn-aaf34a.netlify.app/',
        GithubUrl: 'https://github.com/SiveleleN/e-commerceSite'
    },
    {
        imageUrl: temp,
        theme: 'btn-back-pink',
        name: 'Temperature Converter',
        description: "I have created a temperature converter.",
        LiveUrl: 'https://peppy-melba-17c508.netlify.app/',
        GithubUrl: 'https://github.com/SiveleleN/Temperature-'
    },
    {
        imageUrl: calc,
        theme: 'btn-back-black',
        name: 'Calculator',
        description: 'I have created a fully functioning calculator.',
        LiveUrl: 'https://thunderous-empanada-e719eb.netlify.app/',
        GithubUrl: 'https://github.com/SiveleleN/Calc-and-keyboard'
    },
    {
        imageUrl: bmi,
        theme: 'btn-back-yellow',
        name: 'BIM Calculator',
        description: 'I have created a BIM calculator here as a short task that was given.',
        LiveUrl: 'https://dulcet-scone-2c3a23.netlify.app/',
        GithubUrl: 'https://github.com/SiveleleN/bmiCal'
    }
];

