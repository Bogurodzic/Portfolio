import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../../shared/classes/project.class';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit, AfterViewInit {
 public project: Project;
 public slides = [];
 constructor(
  public dialogRef: MatDialogRef<PortfolioDetailsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Project) {}

  
  ngOnInit() {
    this.project = this.data;
    this.prepareSildes();
    console.log('portfolio open', this.project, this.slides);

  }

  ngAfterViewInit(){

  }

  private prepareSildes(): void {
    this.slides = this.project.projectImages.map((projectImage) => {
      return {image: projectImage}
    });
  }

  //slides = [{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}];


  public close(): void {
    this.dialogRef.close();
  }


}
