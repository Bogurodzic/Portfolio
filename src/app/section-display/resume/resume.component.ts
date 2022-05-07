import { Component, OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery';
import { ResumeEducation } from '../../shared/classes/resume-education.class';
import { ResumeExperience } from '../../shared/classes/resume-experience.class';
import { education } from '../../shared/data/resume-education.data';
import { experience } from '../../shared/data/resume-experience.data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public headline: string = "Resume";
  public subHeadline: string = "6 years of experience";

  public educationHistory: ResumeEducation[]
  public experienceHistory: ResumeExperience[];
  
  constructor() { }

  ngOnInit() {
    this.changeSkillPercentage();
    this.loadEducation();
    this.loadExperience();
  }

  public loadEducation(): void {
    this.educationHistory = education.map((educationItem) => {
      return new ResumeEducation(educationItem.dateStart, educationItem.dateEnd, educationItem.category, educationItem.place, educationItem.description);
    })
  }

  public loadExperience(): void {
    this.experienceHistory = experience.map((educationItem) => {
      return new ResumeExperience(educationItem.dateStart, educationItem.dateEnd, educationItem.field, educationItem.place, educationItem.description);
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
