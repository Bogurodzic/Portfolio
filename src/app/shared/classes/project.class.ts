import { IProject } from "../interfaces/project.interface";

export class Project implements IProject {

    constructor(
      public projectName: string,
      public projectType: string,
      public projectImages: string[],
      public categories: string[],
      public client: string,
      public siteUrl: string,
      public date: string,
      public projectDescription: string,
      public technologies: string[],
      public cover: string
    ){}

    public getClassName(): string {
      return this.categories.join(" ");
    }
  
}
