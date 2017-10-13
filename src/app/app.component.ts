import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  section = "aboutMe"

  constructor() { }

  ngOnInit() {

  }

  changeSection(data: {section: string}){
    this.section = data.section;

    console.log(this.section);
  }
}
