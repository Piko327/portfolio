import jsAdvanced from '../assets/certificates/JSAdvanced.jpeg'
import FundamentalsJava from '../assets/certificates/FundamentalsJava.jpeg'
import JavaOOP from '../assets/certificates/JavaOOP.jpeg'
import JSApplications from '../assets/certificates/JSApplications.jpeg'
import JavaAdvanced from '../assets/certificates/JavaAdvanced.jpeg'
import MySQL from '../assets/certificates/MySQL.jpeg'
import mysql from '../assets/skills/mysql.png'
import js from '../assets/skills/js.png'
import html from '../assets/skills/html.png'
import github from '../assets/skills/github.png'
import firebase from '../assets/skills/firebase.png'
import css from '../assets/skills/css.png'
import react from '../assets/skills/react.png'
import tailwind from '../assets/skills/tailwind.png'
import belleblomMock from '../assets/projectsMockUps/bellebloomMock.png'
import onlineShopMock from '../assets/projectsMockUps/onlineShopMock.png'
import musicLibraryMock from '../assets/projectsMockUps/musicLibraryMock.png'
import NetflixMock from '../assets/projectsMockUps/netflixMock.png'

export const projectsInfo = [{
    img: NetflixMock,
    id: 1,
    title: "Netflix Clone",
    url: "https://netflix-60dae.web.app/",
    github: "https://github.com/fikiivanov/Netflix",
    description:
        "Welcome to Netflix, a cutting-edge React-based platform designed to emulate the functionalities of Netflix. This project seamlessly integrates features for user authentication, allowing users to register and log in securely. Once logged in, users can enjoy a personalized experience by saving their favorite movies and TV shows for easy access. With a client-side rendering architecture, Netflix  ensures a smooth and immersive viewing experience, allowing users to stream their desired video content hassle-free.",
},
{
    img: belleblomMock,
    id: 2,
    title: "BelleBloom",
    url: "https://belle-bloom.vercel.app/",
    github: "https://github.com/fikiivanov/BelleBloom",
    description:
        "Welcome to BelleBloom, a sophisticated Next.js website designed to serve as an informative hub for women's beauty. This platform seamlessly integrates a variety of features to provide users with comprehensive insights into beauty products, beauty care tips, and the latest trends. Developed with a client-server-site rendering architecture, BelleBloom ensures a smooth and engaging user experience.",
},
{
    img: onlineShopMock,
    id: 3,
    title: "Online Shop",
    url: "https://online-shop-mu-three.vercel.app/",
    github: "https://github.com/fikiivanov/OnlineShop",
    description:
        "T-Shop is an e-commerce website built using Next.js, Redux, and JavaScript. It utilizes the Fake Store API to retrieve product data and provide a seamless shopping experience. The web app features a trading product home page, shopping page with categories, and about page. Authentication was implemented using NextAuth.js to secure user access. T-Shop is built with a responsive design in mind and feels free to explore the web app's functionalities and test its responsiveness on different devices.",
},
{
    img: musicLibraryMock,
    id: 4,
    title: "Music Library",
    url: "https://album-store-ffa39.web.app/",
    github: "https://github.com/fikiivanov/musicLibrary",
    description:
        "Welcome to Music Library, a revolutionary React-powered platform dedicated to organizing your music collection. Music Library seamlessly integrates React and Tailwind CSS to provide an intuitive interface for managing your albums. With the backing of SoftUni's backend server, you can securely Add, Delete, and Edit your favorite albums. Plus, our robust Authentication system ensures a safe and personalized experience, allowing you to Register and Login to your account with ease. Experience the harmony of music management with Music Library.",
}
];
export const educationInfo = [{
    content: "This trajectory progressed into a comprehensive Java Object-Oriented Programming (OOP) course, fostering mastery of SOLID principles and instilling a profound understanding of OOP. These experiences form the bedrock of my programming expertise, endowing me with a comprehensive command of Java and the fundamental tenets of object-oriented design.".split(" ")
}, {
    content: "Initiating my programming journey, I acquired a robust grounding in Java, commencing with a fundamental course elucidating core coding principles. Seeking depth, I undertook an advanced Java program, delving into intricate elements including arrays, functional programming, and data structures.".split(" ")
}, {
    content: "Driven by an escalating passion for programming, I transitioned into the dynamic realm of JavaScript. An advanced JavaScript course broadened my scope, acquainting me with asynchronous programming and functional concepts. This interest led to a JavaScript application course, where I methodically explored the intricacies of web development. From orchestrating HTTP requests to mastering REST APIs, I refined my skills in constructing Single Page Applications and executing Client-Side Rendering.".split(" ")
}, {
    content: "Concurrently, my exploration of HTML and CSS laid the groundwork for a seamless transition to React. This multifaceted learning journey, complemented by hands-on projects, converged with an internship where I deepened my understanding of clean code and BEM methodology, solidifying my unwavering commitment to perpetual learning and professional advancement.".split(" ")
}];

export const heroInfo = [
    { content: "Experienced developer capable of building dynamic websites and applications, showcasing skills in JavaScript / React / CSS / HTML through successful personal projects. Ready to bring that same passion and expertise to elevate your projects.".split(" ") }
];
export const skillsInfo = [
    {
        id: 1,
        title: "html",
        image: html,
        color: "#fc490b"
    },
    {
        id: 2,
        title: "css",
        image: css,
        color: "#2465f1"
    },
    {
        id: 3,
        title: "js",
        image: js,
        color: "yellow"
    },
    {
        id: 4,
        title: "react",
        image: react,
        color: "#61dbfb"
    },
    {
        id: 5,
        title: "github",
        image: github,
        color: "#171515"
    },
    {
        id: 6,
        title: "tailwind",
        image: tailwind,
        color: "#01b7d6"
    },
    {
        id: 7,
        title: "mysql",
        image: mysql,
        color: "grey"
    },
    {
        id: 8,
        title: "firebase",
        image: firebase,
        color: "#ffa001"
    },
];


export const certificateInfo = [
    {
        id: 1,
        img: jsAdvanced,
        title: "JS Advanced "
    },
    {
        id: 2,
        img: JSApplications,
        title: "JS Applications"
    },
    {
        id: 3,
        img: JavaAdvanced,
        title: "Java Advanced"
    },
    {
        id: 4,
        img: JavaOOP,
        title: "Java OOP"
    },
    {
        id: 5,
        img: FundamentalsJava,
        title: "Java Fundamentals"
    },
    {
        id: 6,
        img: MySQL,
        title: "MySQL"
    }
]