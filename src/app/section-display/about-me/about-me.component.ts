import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  public headline: string = 'About Me';
  public subHeadline: string = 'young, ambitious, ready for new challenges';

  public backgroundHeight: number;


  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.calculateBackground();
    }, 500)
  }

  ngOnInit() {
 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateBackground();
  }

  private calculateBackground(): void {
    const display = document.getElementsByClassName('display')[0];
    const displayHeight = display.clientHeight;

    const headline = document.getElementsByClassName('headline')[0];
    const headlineHeight = headline.clientHeight;

    const bio = document.getElementsByClassName('bio')[0];
    const bioHeight = bio.clientHeight;

    const services = document.getElementsByClassName('services')[0];
    const servicesHeight = services.clientHeight;

    const backgroundHeight = displayHeight - headlineHeight - bioHeight - servicesHeight - 100;
    console.log(displayHeight,headlineHeight,bioHeight,servicesHeight, backgroundHeight);

    this.backgroundHeight = backgroundHeight;
  }

}
