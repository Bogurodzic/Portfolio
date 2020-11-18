import { Routes } from "@angular/router";
import { AboutMeComponent } from "./section-display/about-me/about-me.component";
import { BlogComponent } from "./section-display/blog/blog.component";
import { ContactComponent } from "./section-display/contact/contact.component";
import { HomeComponent } from "./section-display/home/home.component";
import { PortfolioComponent } from "./section-display/portfolio/portfolio.component";
import { ResumeComponent } from "./section-display/resume/resume.component";

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent }
  ]