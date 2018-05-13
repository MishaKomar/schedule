import { Component, OnInit, Input } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { ScheduleLessonContainer } from '../models/schedule-lesson-container';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

    @Input() lessonContainer: ScheduleLessonContainer;

    constructor(
            private _scheduleService: ScheduleService
        ) {
    }
    ngOnInit () {

    }
}
