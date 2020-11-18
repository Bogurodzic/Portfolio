import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
    { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
