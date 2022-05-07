import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SectionDisplayComponent } from './section-display/section-display.component';
import { HomeComponent } from './section-display/home/home.component';
import { AboutMeComponent } from './section-display/about-me/about-me.component';
import { ResumeComponent } from './section-display/resume/resume.component';
import { PortfolioComponent } from './section-display/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './section-display/portfolio/portfolio-details/portfolio-details.component';
import { BlogComponent } from './section-display/blog/blog.component';
import { BlogItemComponent } from './section-display/blog/blog-item/blog-item.component';
import { ContactComponent } from './section-display/contact/contact.component';

import { appRoutes } from './routes';
import { PortfolioCategoriesComponent } from './section-display/portfolio/portfolio-categories/portfolio-categories.component';
import { HeadlineComponent } from './shared/components/headline/headline.component';
import { PortfolioProjectsComponent } from './section-display/portfolio/portfolio-projects/portfolio-projects.component';


import { PortfolioCategoriesService } from './section-display/portfolio/portfolio-categories/portfolio-categories.service';
import { ResumeEducationComponent } from './section-display/resume/resume-education/resume-education.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatDialogModule } from '@angular/material/dialog';
import { ResumeExperienceComponent } from './section-display/resume/resume-experience/resume-experience.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SectionDisplayComponent,
    HomeComponent,
    AboutMeComponent,
    ResumeComponent,
    PortfolioComponent,
    PortfolioDetailsComponent,
    BlogComponent,
    BlogItemComponent,
    ContactComponent,
    PortfolioCategoriesComponent,
    HeadlineComponent,
    PortfolioProjectsComponent,
    ResumeEducationComponent,
    ResumeExperienceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
    { enableTracing: true, relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    MatDialogModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SwiperModule
  ],
  providers: [PortfolioCategoriesService],
  bootstrap: [AppComponent] ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  
})
export class AppModule { }
