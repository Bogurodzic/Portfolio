import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  @Output() exit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onExit(){
    this.exit.emit();
  }

}
