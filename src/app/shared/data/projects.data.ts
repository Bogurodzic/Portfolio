import { IProject } from "../interfaces/project.interface";

export const projects: IProject[] = [
    {
        projectName: "Clik4Dom",
        projectType: "Mobile Application",
        projectImages: ["assets/img/portfolio/gallery/clik4dom-1.png"],
        categories: ["category-all", "category-mobile"],
        client: "Cravttproperty",
        siteUrl: "https://apps.apple.com/us/app/clik4dom/id1512735374?ign-mpt=uo%3D2",
        date: "2020.11.31",
        projectDescription: "A social mobile application for arranging joint meals, where my responsibility As a front-end developer was to create new features, improving performance and asynch optimizations.",
        technologies: ["Node.js", "express.js", "mongoDB", "Ionic", "Angular", "Typescript", "Javascript", "ES6", "HTML5", "CSS3",  "SASS", "Android Studio", "xCode", "apidocjs"],
        cover: "assets/img/portfolio/cover/zwyczajny-cover.png"
    },
    {
        projectName: "Zwyczajny.pl",
        projectType: "Mobile Application",
        projectImages: ["assets/img/portfolio/gallery/zwyczajny-1.png","assets/img/portfolio/gallery/zwyczajny-2.png"],
        categories: ["category-all", "category-mobile"],
        client: "Zwyczajny.pl",
        siteUrl: "http://zwyczajny.pl",
        date: "2018.06.01",
        projectDescription: "A social mobile application for arranging joint meals, where my responsibility As a front-end developer was to create new features, improving performance and asynch optimizations.",
        technologies: ["HTML5", "CSS3", "Javascript", "SASS", "Php", "MySql", "Wordpress", "Apache Cordova", "xCode", "Android Studio"],
        cover: "assets/img/portfolio/cover/zwyczajny-cover.png"
    },

    {
        projectName: "Ryzowa Park",
        projectType: "Javascript Application",
        projectImages: ["/assets/img/portfolio/gallery/ryzowa-1.png", "/assets/img/portfolio/gallery/ryzowa-2.png", "/assets/img/portfolio/gallery/ryzowa-3.png", "/assets/img/portfolio/gallery/ryzowa-4.png"],  
        categories: ["category-all", "category-site"],
        client: "Ryzowa Park",
        siteUrl: "http://ryzowapark.pl",
        date: "2018.12.15",
        projectDescription: "My responsibility was to create the apartment viewer app for existing Ryzowa Park site. In the app, thanks to visualisation, user could check the placement of the apartments and the actual condition, details about the choosen flat, including section and status. The app also offered possibility of apartment reservation and request to be contacted by the agent.",
        technologies: ["HTML5", "CSS3", "Javascript", "ES6", "jQuery", "Wordpress", "MySQL", "ImageMapster"],
        cover: "assets/img/portfolio/cover/ryzowa-cover.png"
    },


    {
        projectName: "Arcade Game",
        projectType: "Javascript",
        projectImages: ["assets/img/portfolio/gallery/arcade-1.png"],
        categories: ["category-all", "category-arcade", "category-site"],
        client: "Personal project",
        siteUrl: "http://kamil.webheroes.io/Projekty/Arcade/",
        date: "2016.10.11",
        projectDescription: "It is simple arcade game for Udacity Nanodegree Project made in Canvas.",
        technologies: ["HTML5", "CSS3", "Canvas", "Javascript"],
        cover: "assets/img/portfolio/cover/arcade-cover.png"

    },
  ];

