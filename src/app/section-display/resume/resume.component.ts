import { Component, OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery';
import { ResumeEducation } from '../../shared/classes/resume-education.class';
import { education } from '../../shared/data/resume-education.data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public educationHistory: ResumeEducation[]

  constructor() { }

  ngOnInit() {
    this.changeSkillPercentage();
    this.loadEducation();
  }

  public loadEducation(): void {
    this.educationHistory = education.map((educationItem) => {
      return new ResumeEducation(educationItem.dateStart, educationItem.dateEnd, educationItem.category, educationItem.place, educationItem.description);
    })
  }

  changeSkillPercentage(){
    let skills = document.querySelectorAll(".skill-item-container");

    [].forEach.call(skills, skill => {
      changeWidth(getSkillDiv(skill), getSkillPercentage(getSkillDiv(skill)))
    });

    function getSkillDiv(skillParent){
      return skillParent.children[0];
    }

    function getSkillPercentage(skill){
      return skill.dataset.percent;
    }

    function changeWidth(skill, percent){
      skill.style.width = percent;
    }
  }


}
