import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../../shared/classes/project.class';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit, AfterViewInit {
 public project: Project;

 constructor(
  public dialogRef: MatDialogRef<PortfolioDetailsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Project) {}

  
  ngOnInit() {
    this.project = this.data;
    console.log('portfolio open', this.project);

  }

  ngAfterViewInit(){

  }

  public close(): void {
    this.dialogRef.close();
  }


}
