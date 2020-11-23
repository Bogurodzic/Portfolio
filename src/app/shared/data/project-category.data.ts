import { IProjectCategory } from "../interfaces/project-category.interface";

export const projectCategories: IProjectCategory[] = [
    {
        categoryName: "All",
        categoryFilterClass: "category-all",
        active: true
    },
    {
        categoryName: "Mobile Apps",
        categoryFilterClass: "category-mobile",
        active: false
    },
    {
        categoryName: "Websites",
        categoryFilterClass: "category-site",
        active: false
    },
    {
        categoryName: "Arcade",
        categoryFilterClass: "category-arcade",
        active: false
    }
]