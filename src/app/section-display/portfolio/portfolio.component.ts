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
      "Vintage Care",
      "Landing Page",
      "assets/img/portfolio/vintage.png",
      "category-lp",
      "Vintage Care",
      "http://vintagecare.pl",
      "2017.05.15",
      "Landing page created for Vintage Care",
      ["HTML5", "CSS3", "Javascript", "SASS", "Gulp"]
    ),

    new Item(
      "Pillow",
      "Landing Page",
      "assets/img/portfolio/pillow.jpg",
      "category-lp",
      "Private Project",
      "http://www.kamiljarzab.pl/Projekty/PSD-Pillow/",
      "2017.02.10",
      "Landing page created for private purpose",
      ["HTML5", "CSS3", "Javascript", "SASS", "Gulp"]
    ),

    new Item(
      "Portfolio",
      "Landing Page",
      "assets/img/portfolio/portfolio.jpg",
      "category-lp",
      "Private Project",
      "http://www.kamiljarzab.pl/Projekty/PSD-Portfolio/index.html",
      "2017.02.02",
      "Landing page created for private purpose",
      ["HTML5", "CSS3", "Javascript", "SASS", "Gulp"]
    ),

    new Item(
      "Simon Game",
      "Javascript",
      "assets/img/portfolio/simon.png",
      "category-js",
      "Freecodecamp",
      "http://kamiljarzab.pl/Projekty/Simon-Game/",
      "2017.10.06",
      "Simon Game. You are presented with a random series of button presses. Each time you input a series of button presses correctly, You see the same series of button presses but with an additional step. Reach 20 steps in order to win. It is Freecodecamp project",
      ["HTML5", "CSS3", "SASS", "Javascript", "Gulp", "Webpack"]
    ),

    new Item(
      "Tic-Tac-Toe",
      "Javascript",
      "assets/img/portfolio/tic-tac.png",
      "category-js",
      "Freecodecamp",
      "http://kamiljarzab.pl/Projekty/tic-tac-toe/",
      "2017.10.02",
      "Tic Tac Toe game. You can play with friend or with computer. It is Freecodecamp project",
      ["HTML5", "CSS3", "SASS", "Javascript", "Gulp", "Webpack"]
    ),


    new Item(
      "Neighborhood Map",
      "Javascript",
      "assets/img/portfolio/map.png",
      "category-js",
      "Udacity",
      "http://kamiljarzab.pl/Projekty/Neighborhood%20Map%20New/",
      "2016.11.02",
      "Another Udacity Nanodegree Project. On the site you will fin filtered search engine of popular Warsaw locations. Access info about marks by clicking them from the list or from the map. Mark's info provided by wikipedia(en).",
      ["HTML5", "CSS3", "SASS", "Javascript", "Gulp", "Webpack", "Ajax", "Wikipedia API", "Google API"]
    ),

    new Item(
      "Arcade Game",
      "Javascript",
      "assets/img/portfolio/frogger.jpg",
      "category-js",
      "Udacity",
      "http://www.kamiljarzab.pl/Projekty/Arcade/index.html",
      "2016.10.11",
      "My first javascript app. It is simple arcade game made for Udacity Nanodegree Project.",
      ["HTML5", "CSS3", "Canvas", "Javascript"]
    ),

    new Item(
      "Markdown Previewer",
      "Angular",
      "assets/img/portfolio/mark.png",
      "category-ang",
      "Private",
      "http://www.kamiljarzab.pl/Projekty/dist/",
      "2017.10.09",
      "Simple Markdown Previewer. You can type GitHub-flavored Markdown into a text area and see a preview of the output.",
      ["HTML5", "CSS3", "Sass", "AngularJS", "Typescript"]
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
