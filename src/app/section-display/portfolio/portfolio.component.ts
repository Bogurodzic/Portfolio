import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import * as velocity from 'velocity-animate/velocity';
import { Project } from "../../shared/classes/project.class";

@Component({ 
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public headline: string = "Portfolio";
  public subHeadline: string = "My Work";

  // public chosedPortfolio: Project;
  // public chosedPortfolioFirst: boolean = true;
  // public chosedPortfolioLast: boolean = false;
  // public chosedPortfolioIndex: number = 0;
  // public areDetailsHidden: boolean = true;

  constructor() { }

  ngOnInit() { }

  // showProject(projectDetails, index){
  //   this.areDetailsHidden = false;
  //   this.chosedPortfolio = projectDetails;
  //   this.chosedPortfolioIndex = index;
  //   this.checkIndexes(index);
  // }

  // checkIndexes(index){
  //   //this.checkIfFirst(index) ? this.chosedPortfolioFirst = true : this.chosedPortfolioFirst = false;
  //   //this.checkIfLast(index) ? this.chosedPortfolioLast = true : this.chosedPortfolioLast = false;
  // }

  // checkIfFirst(index){
  //   //return index === 0 ? true : false;
  // }

  // checkIfLast(index){
  //   //return index === this.projects.length-1 ? true : false;
  // }

  // onExit(){
  //   this.areDetailsHidden = true;
  // }

  // onLeft(){
  //   this.chosedPortfolioIndex--;
  //   this.checkIndexes(this.chosedPortfolioIndex);
  //   //this.chosedPortfolio = this.projects[this.chosedPortfolioIndex];
  // }

  // onRight(){
  //   this.chosedPortfolioIndex++;
  //   this.checkIndexes(this.chosedPortfolioIndex);
  //  // this.chosedPortfolio = this.projects[this.chosedPortfolioIndex];
  // }


  // public filter(category: string): void {
  //   const categoryHtmlClass = "." + category;
  //   //this.grid.filter(categoryHtmlClass);
  // }

}
