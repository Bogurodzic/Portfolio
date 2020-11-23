import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectCategory } from '../../../shared/classes/project-category.class';
import { projectCategories } from '../../../shared/data/project-category.data';
import { PortfolioCategoriesService } from './portfolio-categories.service';

@Component({
  selector: 'app-portfolio-categories',
  templateUrl: './portfolio-categories.component.html',
  styleUrls: ['./portfolio-categories.component.scss']
})
export class PortfolioCategoriesComponent implements OnInit {
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  public categories: ProjectCategory[] = [];
  
  constructor(private portfolioCategoriesService: PortfolioCategoriesService) { }

  ngOnInit() {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.categories = projectCategories.map((category) => new ProjectCategory(category.categoryName, category.categoryFilterClass, category.active));
  }

  public onCategoryClick(category: ProjectCategory): void {
    this.categories.map((category) => category.setActive(false));
    this.portfolioCategoriesService.changeActiveCategory(category);
  }

}
