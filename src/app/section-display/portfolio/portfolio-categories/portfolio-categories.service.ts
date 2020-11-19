import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ProjectCategory } from '../../../shared/classes/project-category.class';

@Injectable()
export class PortfolioCategoriesService {
  private activeCategory: Subject<ProjectCategory> = new Subject<ProjectCategory>();

  constructor() { }

  public changeActiveCategory(category: ProjectCategory): void {
    category.setActive(true);
    this.activeCategory.next(category);
  }

  public getActiveCategory$(): Observable<ProjectCategory> {
    return this.activeCategory.asObservable();
  }
}
