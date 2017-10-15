import { Component, OnInit } from '@angular/core';
import { BlogItem } from './blog-item/blog-item.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: BlogItem[] = [
    new BlogItem("assets/img/javascript.jpg", "Javascript", "Javascript sucks", "02", "May", "https://github.com/Bogurodzic"),
    new BlogItem("assets/img/javascript.jpg", "Javascript", "Javascript sucks", "03", "May", "https://github.com/Bogurodzic")
  ]

  constructor() { }

  ngOnInit() {

  }

}
