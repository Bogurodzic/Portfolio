import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import * as velocity from 'velocity-animate/velocity';
import { Project } from "../../shared/classes/project.class";

@Component({ 
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public headline: string = "Portfolio";
  public subHeadline: string = "My Work";

  constructor() { }

  ngOnInit() { }
}
