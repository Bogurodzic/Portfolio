import { Component, OnInit } from '@angular/core';
import * as velocity from 'velocity-animate/velocity';
import Muuri from 'muuri/muuri';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log(Muuri.ItemAnimate);
    // var grid = new Muuri('.grid');
    // console.log(grid.getItems())
    // grid.filter('[data-foo]');

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
  
}
