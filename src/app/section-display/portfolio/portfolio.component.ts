import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Item } from "./item/item.model";
import * as velocity from 'velocity-animate/velocity';
import Muuri from 'muuri/muuri';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked {
  grid;
  isDetailsHidden = true;
  gridInit = 0;

  projects: Item[] = [
    new Item(
      "Zwyczajny.pl",
      "Mobile Application",
      "assets/img/portfolio/zwyczajny.png",
      "category-mobile",
      "Zwyczajny.pl",
      "http://zwyczajny.pl",
      "2018.06.01",
      "A social mobile application for arranging joint meals, where I was front-end developer. I was responsible for creating new features and asynchronous optimization.",
      ["HTML5", "CSS3", "Javascript", "SASS", "Php", "MySql", "Wordpress"],
      "assets/img/portfolio/zwyczajny-cover.png"
    ),

    new Item(
      "Ryzowa Park",
      "Javascript Application",
      "assets/img/portfolio/ryzowa.png",
      "category-js",
      "Ryzowa Park",
      "http://ryzowapark.pl",
      "2018.12.15",
      "I was responsible for creating apartment viewer for Ryzowa Park site.",
      ["HTML5", "CSS3", "Javascript", "ES6", "jQuery", "ImageMapster"],
      "assets/img/portfolio/ryzowa-cover.png"
    ),

    new Item(
      "Urban Quest",
      "Landing Page",
      "assets/img/portfolio/urban.png",
      "category-lp",
      "Skanska",
      "http://skanska.blpoland.com/en/",
      "2018.02.15",
      "Landing Page created for Urban Quest powered by Skanska",
      ["HTML5", "CSS3", "Javascript", "jQuery", "Php", "Gulp"],
      "assets/img/portfolio/urban-cover.png"
    ),

    new Item(
      "Ciabbatta",
      "Wordpress Site",
      "assets/img/portfolio/ciabbatta.png",
      "category-lp",
      "Ciabbatta",
      "http://www.ciabbatta.pl",
      "2017.10.10",
      "Wordpress page, based on a template, created for Ciabbatta Catering",
      ["HTML5", "CSS3", "Javascript", "Php", "Wordpress", "MySQL"],
      "assets/img/portfolio/ciabbatta-cover.png",
    ),

    new Item(
      "Portfolio Gabriela",
      "Single Page Application",
      "assets/img/portfolio/gabi-portfolio.jpg",
      "category-lp",
      "Gabriela Szajda",
      "http://gabrielaszajda.pl",
      "2018.01.05",
      "Portfolio created for Gabriela Szajda",
      ["HTML5", "CSS3", "Javascript", "Vue.js", "SASS", "Gulp", "Webpack"],
      "assets/img/portfolio/gabi-portfolio-cover.png"
    ),

    new Item(
      "Pillow",
      "Landing Page",
      "assets/img/portfolio/pillow.jpg",
      "category-lp",
      "Private Project",
      "http://kamil.webheroes.io/Projekty/Pillow/",
      "2017.02.10",
      "Landing page created for private purpose",
      ["HTML5", "CSS3", "Javascript", "SASS", "Gulp"],
      "assets/img/portfolio/pillow.jpg",
    ),

    new Item(
      "Portfolio",
      "Landing Page",
      "assets/img/portfolio/portfolio.jpg",
      "category-lp",
      "Private Project",
      "http://kamil.webheroes.io/Projekty/PSD-Portfolio/",
      "2017.02.02",
      "Landing page created for private purpose",
      ["HTML5", "CSS3", "Javascript", "SASS", "Gulp"],
      "assets/img/portfolio/portfolio.jpg",
    ),

    new Item(
      "Tic-Tac-Toe",
      "Javascript",
      "assets/img/portfolio/tic-tac-toe.png",
      "category-js",
      "Freecodecamp",
      "http://kamil.webheroes.io/Projekty/tictactoe/",
      "2017.10.02",
      "Tic Tac Toe game. You can play with friend or with computer. It is Freecodecamp project",
      ["HTML5", "CSS3", "SASS", "Javascript", "Gulp", "Webpack"],
      "assets/img/portfolio/tic-tac-toe-cover.png",

    ),

    new Item(
      "Neighborhood Map",
      "Javascript",
      "assets/img/portfolio/map.png",
      "category-js",
      "Udacity",
      "http://kamil.webheroes.io/Projekty/Map",
      "2016.11.02",
      "Another Udacity Nanodegree Project. On the site you will fin filtered search engine of popular Warsaw locations. Access info about marks by clicking them from the list or from the map. Mark's info provided by wikipedia(en).",
      ["HTML5", "CSS3", "SASS", "Javascript", "Gulp", "Webpack", "Ajax", "Wikipedia API", "Google API"],
      "assets/img/portfolio/map-cover.png"

    ),

    new Item(
      "Arcade Game",
      "Javascript",
      "assets/img/portfolio/arcade.png",
      "category-js",
      "Udacity",
      "http://kamil.webheroes.io/Projekty/Arcade/",
      "2016.10.11",
      "My first javascript app. It is simple arcade game made for Udacity Nanodegree Project.",
      ["HTML5", "CSS3", "Canvas", "Javascript"],
      "assets/img/portfolio/arcade-cover.png"

    ),

    new Item(
      "Vintage Care",
      "Landing Page",
      "assets/img/portfolio/vintage.png",
      "category-lp",
      "Vintage Care",
      "http://vintagecare.pl",
      "2017.05.15",
      "Simple landing page created for Vintage Care",
      ["HTML5", "CSS3", "Javascript", "SASS", "Gulp"],
      "assets/img/portfolio/vintage-cover.png"
    ),

    new Item(
      "UKKONE OY",
      "Landing Page",
      "assets/img/portfolio/ukkone.png",
      "category-lp",
      "UKKONE OY",
      "http://ukkone.fi",
      "2017.04.15",
      "Landing Page created for UKKONE OY",
      ["HTML5", "CSS3", "Javascript"],
      "assets/img/portfolio/ukkone-cover.png"
    ),

    new Item(
      "Simon Game",
      "Javascript",
      "assets/img/portfolio/simon.png",
      "category-js",
      "Freecodecamp",
      "http://kamil.webheroes.io/Projekty/Simon/",
      "2017.10.06",
      "Simon Game. You are presented with a random series of button presses. Each time you input a series of button presses correctly, You see the same series of button presses but with an additional step. Reach 20 steps in order to win. It is Freecodecamp project",
      ["HTML5", "CSS3", "SASS", "Javascript", "Gulp", "Webpack"],
      "assets/img/portfolio/simon-cover.png"

    ),

    new Item(
      "Markdown Previewer",
      "Angular",
      "assets/img/portfolio/mark.png",
      "category-ang",
      "Private",
      "http://kamil.webheroes.io/Projekty/mark/",
      "2017.10.09",
      "Simple Markdown Previewer. You can type GitHub-flavored Markdown into a text area and see a preview of the output.",
      ["HTML5", "CSS3", "Sass", "AngularJS", "Typescript"],
      "assets/img/portfolio/mark-cover.png"

    )
  ];

  chosedPortfolio = this.projects[0];
  chosedPortfolioFirst = true;
  chosedPortfolioLast = false;
  chosedPortfolioIndex = 0;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewChecked(){
    if(this.gridInit < 5){
      this.gridInit++;
      this.grid = new Muuri('.grid');
      this.addEventsForCategories();
    }
  }

  ngAfterContentInit() {

  }

  ngAfterContentChecked() {

  }

  ngAfterViewInit() {

  }

  addEventsForCategories(){
    let categories = document.querySelectorAll(".portfolio-categories-list__item");

    [].forEach.call(categories, category => {

      category.addEventListener("click", () => {
        removeClassFromAll();
        addClass(category);
      });

      function removeClassFromAll(){
        [].forEach.call(categories, category => {
          category.classList.remove("portfolio-categories-list__item--highlited");
        })
      }

      function addClass(category){
        category.classList.add("portfolio-categories-list__item--highlited");
      }

    });
  }

  filterAll(){
    this.grid.filter('.category-lp, .category-js, .category-ang');

  }

  filterLp(){
    this.grid.filter('.category-js');

    this.grid.filter('.category-lp');

  }

  filterJs(){
    this.grid.filter('.category-lp');
    this.grid.filter('.category-js');

  }


  filterMobile(){
    this.grid.filter('.category-mobile');
  }

  filterAng(){
    this.grid.filter('.category-lp');

    this.grid.filter('.category-ang');

  }

  showProject(projectDetails, index){
    this.isDetailsHidden = false;
    this.chosedPortfolio = projectDetails;
    this.chosedPortfolioIndex = index;
    this.checkIndexes(index);
  }

  checkIndexes(index){
    this.checkIfFirst(index) ? this.chosedPortfolioFirst = true : this.chosedPortfolioFirst = false;
    this.checkIfLast(index) ? this.chosedPortfolioLast = true : this.chosedPortfolioLast = false;
  }

  checkIfFirst(index){
    return index === 0 ? true : false;
  }

  checkIfLast(index){
    return index === this.projects.length-1 ? true : false;
  }

  onExit(){
    this.isDetailsHidden = true;
  }

  onLeft(){
    this.chosedPortfolioIndex--;
    this.checkIndexes(this.chosedPortfolioIndex);
    this.chosedPortfolio = this.projects[this.chosedPortfolioIndex];
  }

  onRight(){
    this.chosedPortfolioIndex++;
    this.checkIndexes(this.chosedPortfolioIndex);
    this.chosedPortfolio = this.projects[this.chosedPortfolioIndex];
  }

}
