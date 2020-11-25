
import { IResumeExperience } from '../interfaces/resume-experience.interface';

export class ResumeExperience implements IResumeExperience {

    constructor(
        public dateStart: string,
        public dateEnd: string,
        public field: string,
        public place: string,
        public description: string,
    ){}

        public getFullDate(): string {
            return this.dateEnd ? this.dateStart + ' - ' + this.dateEnd : this.dateStart;
        }
  
}
   