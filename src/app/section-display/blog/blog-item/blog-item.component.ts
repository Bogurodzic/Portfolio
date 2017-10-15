import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() blogItem = {imageSrc: String, category: String, title: String, dateDay: String, dateMonth: String, linkSrc: String}

  constructor() { }

  ngOnInit() {
  }

}
