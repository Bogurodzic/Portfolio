import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from '../../../shared/classes/project.class';
import { projects } from '../../../shared/data/projects.data';
import { PortfolioCategoriesService } from '../portfolio-categories/portfolio-categories.service';
import { MatDialog } from '@angular/material/dialog';
import Muuri from 'muuri/muuri';
import { Subscription } from 'rxjs/Subscription';
import { ProjectCategory } from '../../../shared/classes/project-category.class';
import { PortfolioDetailsComponent } from '../portfolio-details/portfolio-details.component';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent implements OnInit, OnDestroy {
  private grid: Muuri;
  private activeCategorySubscription: Subscription;

  public projects: Project[] = [];
  
  constructor(
    private portfolioCategoriesService: PortfolioCategoriesService, 
    private spinner: NgxSpinnerService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.spinner.show();
    this.loadProjects();
    this.initSubscriptions();

    setTimeout(() => {
      this.initializeGrid();
      this.spinner.hide();
    }, 1000); 
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

  private getDialogHeight(): string {
    const windowWidth = window.innerWidth;
    let dialogHeight;

    if (windowWidth > 1920) {
      dialogHeight = '60%';
    } else if (windowWidth > 1500) {
      dialogHeight = '70%';
    } else {
      dialogHeight = '70%';
    }

    return dialogHeight;
  }

  private getDialogWidth(): string {
    return '95%';
  }

  public openProject(project: Project): void {
    const dialogRef = this.dialog.open(PortfolioDetailsComponent, {
      width: this.getDialogWidth(),
      height: this.getDialogHeight(),
      data: project
    });
  }

}
