import { IProjectCategory } from "../interfaces/project-category.interface";

export class ProjectCategory implements IProjectCategory {

    constructor(public categoryName: string, public categoryFilterClass: string, public active: boolean) {}
  
    public setActive(active: boolean): void {
        this.active = active;
    }
}
