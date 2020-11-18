import { IItem } from "../item/item.interface";

export const projects: IItem[] = [
    {
        projectName: "Zwyczajny.pl",
        projectType: "Mobile Application",
        projectImages: ["assets/img/portfolio/zwyczajny.png"],
        categories: ["category-mobile"],
        client: "Zwyczajny.pl",
        siteUrl: "http://zwyczajny.pl",
        date: "2018.06.01",
        projectDescription: "A social mobile application for arranging joint meals, where my responsibility As a front-end developer was to create new features, improving performance and asynch optimizations.",
        technologies: ["HTML5", "CSS3", "Javascript", "SASS", "Php", "MySql", "Wordpress"],
        cover: "assets/img/portfolio/zwyczajny-cover.png"
    },

    {
        projectName: "Ryzowa Park",
        projectType: "Javascript Application",
        projectImages: ["assets/img/portfolio/ryzowa.png"],  
        categories: ["category-js", "category-mobile"],
        client: "Ryzowa Park",
        siteUrl: "http://ryzowapark.pl",
        date: "2018.12.15",
        projectDescription: "My responsibility was to create the aparment viewer app for existing Ryzowa Park site.",
        technologies: ["HTML5", "CSS3", "Javascript", "ES6", "jQuery", "ImageMapster"],
        cover: "assets/img/portfolio/ryzowa-cover.png"
    },


    {
        projectName: "Arcade Game",
        projectType: "Javascript",
        projectImages: ["assets/img/portfolio/arcade.png"],
        categories: ["category-js"],
        client: "Personal project",
        siteUrl: "http://kamil.webheroes.io/Projekty/Arcade/",
        date: "2016.10.11",
        projectDescription: "My first javascript app. It is simple arcade game made for Udacity Nanodegree Project.",
        technologies: ["HTML5", "CSS3", "Canvas", "Javascript"],
        cover: "assets/img/portfolio/arcade-cover.png"

    },
  ];