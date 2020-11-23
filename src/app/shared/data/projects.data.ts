import { IProject } from "../interfaces/project.interface";

export const projects: IProject[] = [
    {
        projectName: "Zwyczajny.pl",
        projectType: "Mobile Application",
        projectImages: ["assets/img/portfolio/gallery/zwyczajny-1.png"],
        categories: ["category-all", "category-mobile"],
        client: "Zwyczajny.pl",
        siteUrl: "http://zwyczajny.pl",
        date: "2018.06.01",
        projectDescription: "A social mobile application for arranging joint meals, where my responsibility As a front-end developer was to create new features, improving performance and asynch optimizations.",
        technologies: ["HTML5", "CSS3", "Javascript", "SASS", "Php", "MySql", "Wordpress"],
        cover: "assets/img/portfolio/cover/zwyczajny-cover.png"
    },

    {
        projectName: "Ryzowa Park",
        projectType: "Javascript Application",
        projectImages: ["assets/img/portfolio/gallery/ryzowa-1.png"],  
        categories: ["category-all", "category-site"],
        client: "Ryzowa Park",
        siteUrl: "http://ryzowapark.pl",
        date: "2018.12.15",
        projectDescription: "My responsibility was to create the aparment viewer app for existing Ryzowa Park site.",
        technologies: ["HTML5", "CSS3", "Javascript", "ES6", "jQuery", "ImageMapster"],
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
        projectDescription: "My first javascript app. It is simple arcade game made for Udacity Nanodegree Project.",
        technologies: ["HTML5", "CSS3", "Canvas", "Javascript"],
        cover: "assets/img/portfolio/cover/arcade-cover.png"

    },
  ];