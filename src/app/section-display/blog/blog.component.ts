import { Component, OnInit } from '@angular/core';
import { BlogItem } from './blog-item/blog-item.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: BlogItem[] = [
    new BlogItem("assets/img/javascript.jpg", "Javascript", "ES6 : WPROWADZENIE |CZ. 6| – KLASY", "29", "Sept", "http://kamiljarzab.pl/blog/2017/09/29/es6-wprowadzenie-cz-6-klasy/"),
    new BlogItem("assets/img/javascript.jpg", "Javascript", "ES6 : WPROWADZENIE |CZ. 5| – DESTRUKTURYZACJA", "1", "Sept", "http://kamiljarzab.pl/blog/2017/09/01/es6-destrukturyzacja/"),
    new BlogItem("assets/img/javascript.jpg", "Javascript", "ES6 : WPROWADZENIE |CZ. 4| – ARROW FUNCTIONS", "24", "Aug", "http://kamiljarzab.pl/blog/2017/08/24/es6-arrow-functions/"),
    new BlogItem("assets/img/javascript.jpg", "Javascript", "ES6 : WPROWADZENIE |CZ. 3| – DOMYŚLNE WARTOŚCI PARAMETRÓW", "19", "May", "http://kamiljarzab.pl/blog/2017/05/19/es6-domyslne/"),
    new BlogItem("assets/img/javascript.jpg", "Javascript", "ES6 : WPROWADZENIE |CZ. 2| – SPREAD & REST", "28", "April", "http://kamiljarzab.pl/blog/2017/04/28/wprowadzenie-do-es6-cz-2-spread-rest/"),
    new BlogItem("assets/img/javascript.jpg", "Javascript", "ES6 : WPROWADZENIE |CZ. 1| – LET I CONST", "16", "April", "http://kamiljarzab.pl/blog/2017/04/16/es6-let-const/")
  ]

  constructor() { }

  ngOnInit() {

  }

}
