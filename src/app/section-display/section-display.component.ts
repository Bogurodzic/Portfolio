import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event } from  '@angular/router'

@Component({
  selector: 'app-section-display',
  templateUrl: './section-display.component.html',
  styleUrls: ['./section-display.component.scss']
})
export class SectionDisplayComponent implements OnInit {
  isHome: Boolean = true;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(()=>{
      this.checkIfHomeRouteisActive();
    })
  }

  checkIfHomeRouteisActive() {
    if(this.router.url === '/') {
      this.activeHomeSection();
    } else {
      this.unactiveHomeSection();
    }
  }

  unactiveHomeSection() {
    this.isHome = false;
  }

  activeHomeSection() {
    this.isHome = true;
  }


}
