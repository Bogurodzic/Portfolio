import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import * as velocity from 'velocity-animate/velocity';
import Muuri from 'muuri/muuri';
import { Project } from "../../shared/classes/project.class";
import { projects } from '../../shared/data/projects.data';

@Component({ 
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  private grid: Muuri;

  public projects: Project[] = [];
  public chosedPortfolio: Project;
  public chosedPortfolioFirst: boolean = true;
  public chosedPortfolioLast: boolean = false;
  public chosedPortfolioIndex: number = 0;
  public areDetailsHidden: boolean = true;

  constructor() { }

  ngOnInit() {
    this.loadProjects();
    this.loadInitialProjectToShow();

    setTimeout(() => {
      this.grid = new Muuri('.grid');
    }); 

  }

  private loadProjects(): void {
    this.projects = projects.map((project) => new Project(project.projectName, project.projectType, project.projectImages, project.categories, project.client, project.siteUrl, project.date, project.projectDescription, project.technologies, project.cover));
  }

  private loadInitialProjectToShow(): void {
    this.chosedPortfolio = this.projects[0];
  }

  showProject(projectDetails, index){
    this.areDetailsHidden = false;
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
    this.areDetailsHidden = true;
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


  public filter(category: string): void {
    const categoryHtmlClass = "." + category;
    this.grid.filter(categoryHtmlClass);
  }

}
