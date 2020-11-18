import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {
  @Input() headline: string;
  @Input() subHeadline: string;  

  constructor() { }

  ngOnInit() { }

}
