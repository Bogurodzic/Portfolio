import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SectionDisplayComponent } from './section-display/section-display.component';
import { HomeComponent } from './section-display/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SectionDisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
