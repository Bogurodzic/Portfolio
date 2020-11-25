import { Component, Input, OnInit } from '@angular/core';
import { IResumeEducation } from '../../../shared/interfaces/resume-education.interface';

@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['./resume-education.component.scss']
})
export class ResumeEducationComponent implements OnInit {

  @Input() education: IResumeEducation[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
