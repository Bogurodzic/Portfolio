import { Component, OnInit } from '@angular/core';
import * as velocity from 'velocity-animate/velocity';
import Muuri from 'muuri/muuri';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  grid;

  constructor() { }

  ngOnInit() {
    this.grid = new Muuri('.grid');
    this.addEventsForCategories();
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
    this.grid.filter('[category-lp],[category-js], [category-ang]');
  }

  filterLp(){
    this.grid.filter('[category-lp]');
  }

  filterJs(){
    this.grid.filter('[category-js]');
  }

  filterAng(){
    this.grid.filter('[category-ang]');
  }

}
