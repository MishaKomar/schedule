import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';
import { ScheduleLessonContainer } from '../models/schedule-lesson-container';

import * as _ from 'lodash';

@Injectable()
export class ScheduleService {
    
    private firstClassLessonDuration: number = 35; // first class
    private secondClassesLessonDuration: number = 40; // second till fourth class 
    private thirdClassesLessonDuration: number = 45; // fifth till eleventh class
    
    public schedule: Schedule[] = [];

    constructor(
        ) {
    }

    add(data: {
        name: string,
        forClass: {
            first: boolean,
            second: boolean,
            third: boolean,
        }
        firstLessonStart: string,
        breaks: number[]
    }) {
        let label = '5-11 класи';
        let value = 'third';
        let lessonContainers = [];
        if (data.forClass.first) {
            let thirdLesson = new ScheduleLessonContainer(  // create schedule for 5-11 classes
                label,
                value, 
                data.firstLessonStart, 
                this.thirdClassesLessonDuration,
                this.thirdClassesLessonDuration - this.thirdClassesLessonDuration,
                data.breaks
            );
            lessonContainers.unshift(thirdLesson);
        } if (data.forClass.first) {
            label = '2-4 класи';  
            value = 'second';      
            let secondLesson = new ScheduleLessonContainer( // create schedule for 2-4 classes
                label,
                value,
                data.firstLessonStart, 
                this.secondClassesLessonDuration,
                this.thirdClassesLessonDuration - this.secondClassesLessonDuration,
                data.breaks
            );
            lessonContainers.unshift(secondLesson);
        } 
        if (data.forClass.first) {
            label = '1 класи';
            value = 'first';
            let firstLesson = new ScheduleLessonContainer( // create schedule for 1 class
                label,
                value,
                data.firstLessonStart, 
                this.firstClassLessonDuration,
                this.thirdClassesLessonDuration - this.firstClassLessonDuration,
                data.breaks
            );
            lessonContainers.unshift(firstLesson);            
        }
        
        let newSchedule = new Schedule(data.name, lessonContainers);
        this.schedule.push(newSchedule);
        console.log(JSON.stringify(this.schedule))
    }
}
