import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  section = "home";

  constructor() { }

  ngOnInit() {

  }

  changeSection(data: {section: string}){
    this.section = data.section;
    this.toggleMenu();
  }

  showMenu(){
    document.getElementById("menu").classList.add("showMenu")
    document.getElementById("menu").classList.remove("hideMenu")
    console.log("show");
  }

  hideMenu(){
    document.getElementById("menu").classList.add("hideMenu")
    document.getElementById("menu").classList.remove("showMenu")
    console.log("show");
  }

  toggleMenu(){
    document.getElementById("menu").classList.contains("showMenu") ? this.hideMenu() : this.showMenu();
  }
}
