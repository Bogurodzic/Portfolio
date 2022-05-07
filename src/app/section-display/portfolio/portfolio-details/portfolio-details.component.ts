import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../../shared/classes/project.class';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-portfolio-details', 
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit, AfterViewInit {
  public project: Project;
  public slides = [];
  config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
  };

  constructor(
    public dialogRef: MatDialogRef<PortfolioDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  
  public ngOnInit(): void {
    this.project = this.data;
    this.prepareSildes();
    console.log('portfolio open', this.project, this.slides);
    
  }

  public ngAfterViewInit(): void {

  }

  public onSwiper(swiper: any): void {
    console.log(swiper);
  }

  public onSlideChange(): void {
    console.log('slide change');
  }

  private prepareSildes(): void {
    this.slides = this.project.projectImages.map((projectImage) => {
      return {image: projectImage}
    });
  }

  public close(): void {
    this.dialogRef.close();
  }
}
