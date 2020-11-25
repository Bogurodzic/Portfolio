import { Component, Input, OnInit } from '@angular/core';
import { ResumeExperience } from '../../../shared/classes/resume-experience.class';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.scss']
})
export class ResumeExperienceComponent implements OnInit {
  @Input() experienceHistory: ResumeExperience[];

  constructor() { }

  ngOnInit(): void {
  }

}
