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
      "Project 1 Testing",
      "Landing Page",
      "http://via.placeholder.com/666x999",
      "category-lp",
      "Random Client",
      "www.google.pl",
      "1994.02.05",
      "woooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow owwoooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow owwoooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow ow",
      ["xd", "p"]
    ),
    new Item(
      "Project 2 Testing",
      "Landing Page",
      "http://via.placeholder.com/666x999",
      "category-lp",
      "Random Client",
      "www.google.pl",
      "1994.02.05",
      "woooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow owwoooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow owwoooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow ow",
      ["xd", "p"]
    ),
    new Item(
      "Project 3 Testing",
      "Landing Page",
      "http://via.placeholder.com/666x999",
      "category-lp",
      "Random Client",
      "www.google.pl",
      "1994.02.05",
      "woooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow owwoooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow owwoooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow ow",
      ["xd", "p"]
    ),
    new Item(
      "Project 4 Testing",
      "Landing Page",
      "http://via.placeholder.com/666x999",
      "category-lp",
      "Random Client",
      "www.google.pl",
      "1994.02.05",
      "woooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow owwoooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow owwoooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow ow",
      ["xd", "p"]
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

  }

  ngAfterContentInit() {

  }

  ngAfterContentChecked() {
    if(this.gridInit < 3){
      this.gridInit++;
      this.grid = new Muuri('.grid');
      this.addEventsForCategories();
      console.log("content checked")
    }
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
    this.grid.filter('.category-lp');
  }

  filterJs(){
    this.grid.filter('.category-js');
  }

  filterAng(){
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
