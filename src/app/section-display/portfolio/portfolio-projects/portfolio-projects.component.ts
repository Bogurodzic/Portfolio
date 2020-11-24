import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from '../../../shared/classes/project.class';
import { projects } from '../../../shared/data/projects.data';
import { PortfolioCategoriesService } from '../portfolio-categories/portfolio-categories.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import Muuri from 'muuri/muuri';
import { Subscription } from 'rxjs/Subscription';
import { ProjectCategory } from '../../../shared/classes/project-category.class';
import { PortfolioDetailsComponent } from '../portfolio-details/portfolio-details.component';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent implements OnInit, OnDestroy {
  private grid: Muuri;
  private activeCategorySubscription: Subscription;

  public projects: Project[] = [];
  
  constructor(private portfolioCategoriesService: PortfolioCategoriesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadProjects();
    this.initSubscriptions();

    setTimeout(() => {
      this.initializeGrid();
    }, 250); 
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

  public openProject(project: Project): void {
    const windowWidth = window.innerWidth;
    const dialogRef = this.dialog.open(PortfolioDetailsComponent, {
      width: '95%',
      height: windowWidth > 1920 ? '60%' : '52%',
      data: project
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
