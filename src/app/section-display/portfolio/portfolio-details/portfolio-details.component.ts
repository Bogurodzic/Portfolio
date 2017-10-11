import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  @Output() exit = new EventEmitter();
  @Input() detail = {
    projectName: String,
    projectType: String,
    projectImage: String,
    projectCategory: String,
    client: String,
    siteUrl: String,
    date: String,
    projectDescription: String
 };
 @Input() isFirst: boolean;
 @Input() isLast: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.isFirst);
  }

  onExit(){
    this.exit.emit();
  }

}
