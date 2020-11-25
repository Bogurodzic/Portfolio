import { IResumeEducation } from '../interfaces/resume-education.interface';

export class ResumeEducation implements IResumeEducation {

    constructor(
        public dateStart: string,
        public dateEnd: string,
        public category: string,
        public place: string,
        public description: string,
    ){}

        public getFullDate(): string {
            return this.dateEnd ? this.dateStart + ' - ' + this.dateEnd : this.dateStart;
        }
  
}
   