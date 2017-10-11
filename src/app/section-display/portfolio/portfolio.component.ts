import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Item } from "./item/item.model";
import * as velocity from 'velocity-animate/velocity';
import Muuri from 'muuri/muuri';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  grid;
  isDetailsHidden = true;

  projects: Item[] = [
    new Item(
      "Project 1 Testing",
      "Landing Page",
      "http://via.placeholder.com/666x999",
      "category-lp",
      "Random Client",
      "www.google.pl",
      "1994.02.05",
      "woooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow owwoooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow owwoooo wowoooooow wowowowowoowowowow  w ow w owo wo o wo wo wowo wo wo w  w owow o w ow ow ow"
    )
  ];

  chosedPortfolio = this.projects[0];

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
      this.grid = new Muuri('.grid');
      this.addEventsForCategories();
      console.log("xD")
  }

  addEventsForCategories(){
    let categories = document.querySelectorAll(".portfolio-categories-list__item");

    [].forEach.call(categories, category => {
      console.log(category);

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

  showProject(e){
    console.log(e);
    this.isDetailsHidden = false;
  }

  onExit(){
    this.isDetailsHidden = true;
  }

}
