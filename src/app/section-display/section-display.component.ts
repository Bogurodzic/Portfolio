import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-display',
  templateUrl: './section-display.component.html',
  styleUrls: ['./section-display.component.scss']
})
export class SectionDisplayComponent implements OnInit {
  chosedSection = "home";


  constructor() { }

  ngOnInit() {
  }

}
