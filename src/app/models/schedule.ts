import { ScheduleLessonContainer } from '../models/schedule-lesson-container'

export class Schedule {
    
    constructor(public name: string,
                public lessonsForClasses: ScheduleLessonContainer[] 
                ) {
    }
}