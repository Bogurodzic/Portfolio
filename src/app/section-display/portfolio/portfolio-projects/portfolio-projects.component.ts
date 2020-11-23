import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from '../../../shared/classes/project.class';
import { projects } from '../../../shared/data/projects.data';
import { PortfolioCategoriesService } from '../portfolio-categories/portfolio-categories.service';

import Muuri from 'muuri/muuri';
import { Subscription } from 'rxjs/Subscription';
import { ProjectCategory } from '../../../shared/classes/project-category.class';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent implements OnInit, OnDestroy {
  private grid: Muuri;
  private activeCategorySubscription: Subscription;

  public projects: Project[] = [];
  
  constructor(private portfolioCategoriesService: PortfolioCategoriesService) { }

  ngOnInit() {
    this.loadProjects();
    this.initSubscriptions();

    setTimeout(() => {
      this.initializeGrid();
    }); 
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }


  private initSubscriptions(): void {
    this.activeCategorySubscription = this.portfolioCategoriesService.getActiveCategory$().subscribe((category: ProjectCategory) => {
      this.filter(category.categoryFilterClass);
    });
  }

  private unsubscribe(): void {
    if (this.activeCategorySubscription !== undefined) {
      this.activeCategorySubscription.unsubscribe();
    }
  }

  private loadProjects(): void {
    this.projects = projects.map((project) => new Project(project.projectName, project.projectType, project.projectImages, project.categories, project.client, project.siteUrl, project.date, project.projectDescription, project.technologies, project.cover));
  }

  private initializeGrid(): void {
    this.grid = new Muuri('.grid');
  }

  private filter(category: string): void {
    const categoryHtmlClass = "." + category;
    this.grid.filter(categoryHtmlClass);
  }

}
