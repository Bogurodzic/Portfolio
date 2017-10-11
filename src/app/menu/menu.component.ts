import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import $ from 'jquery/dist/jquery';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() onChosedSection = new EventEmitter<{section: string}>();

  constructor() { }

  ngOnInit() {
  }


  chosedSection(section){
    this.onChosedSection.emit({"section": section});
    console.log(section);
  }

}
