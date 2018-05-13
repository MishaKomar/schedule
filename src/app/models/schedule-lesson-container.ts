import { ScheduleLesson } from '../models/schedule-lesson';
import { TimeService } from '../services/time.service';

export class ScheduleLessonContainer {
    public lessons: ScheduleLesson[] = [];
    constructor(
        public label: string,
        public value: string,
        firstLessonStart: string,
        duration: number,
        additionalDuration: number, // 
        breaks: number[] // pause between classes
    ) {
        let lastLessonStart = firstLessonStart;
        for(let i = 0; i < breaks.length; i++) {
            this.lessons.push(new ScheduleLesson(
                i + 1, 
                lastLessonStart,
                duration,
                breaks[i] + additionalDuration // additional duration between classes, used for equalization start time of lesson 
            ));
            lastLessonStart = TimeService.addMinutes(this.lessons[i].end, breaks[i] + additionalDuration);
        }
    }
}