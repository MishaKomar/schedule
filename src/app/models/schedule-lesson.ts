import { TimeService } from '../services/time.service';

export class ScheduleLesson {
    public end: string = '';
    constructor(
        public number: number,
        public start: string,
        public duration: number,
        public pause: number
    ) {        
        this.end = TimeService.addMinutes(start, duration);
    }
}