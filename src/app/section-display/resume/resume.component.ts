import { Component, OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.changeSkillPercentage();


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
