import { IItem } from "./item.interface";

export class Item implements IItem {

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
