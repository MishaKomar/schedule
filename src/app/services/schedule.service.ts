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
        if (data.forClass.third) {
            let thirdLesson = new ScheduleLessonContainer(  // create schedule for 5-11 classes
                label,
                value, 
                data.firstLessonStart, 
                this.thirdClassesLessonDuration,
                this.getAdditionalDuration(data.forClass, value),
                data.breaks
            );
            lessonContainers.unshift(thirdLesson);
        } if (data.forClass.second) {
            label = '2-4 класи';  
            value = 'second';      
            let secondLesson = new ScheduleLessonContainer( // create schedule for 2-4 classes
                label,
                value,
                data.firstLessonStart, 
                this.secondClassesLessonDuration,
                this.getAdditionalDuration(data.forClass, value),
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
                this.getAdditionalDuration(data.forClass, value),
                data.breaks
            );
            lessonContainers.unshift(firstLesson);            
        }
        
        let newSchedule = new Schedule(data.name, lessonContainers);
        this.schedule.push(newSchedule);
        console.log(JSON.stringify(this.schedule))
    }

    private getAdditionalDuration(selectedClasses: {
        first: boolean,
        second: boolean,
        third: boolean,
    }, toClass: string) {
        if (toClass == 'first') {
            if (selectedClasses.third) {
                return this.thirdClassesLessonDuration - this.firstClassLessonDuration;
            } else if (selectedClasses.second) {
                return this.secondClassesLessonDuration - this.firstClassLessonDuration                
            } else {
                return 0;
            }
        } else if (toClass == 'second') {
            if (selectedClasses.third) {
                return this.thirdClassesLessonDuration - this.secondClassesLessonDuration;
            } else {
                return 0;                
            }
        } else if (toClass == 'third') {
            return 0;
        }
    }
}
