import { Component, OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log($);
  }

}
