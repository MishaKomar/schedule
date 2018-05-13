import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.scss']
})
export class ScheduleAddComponent implements OnInit {

    @Output() onScheduleAdding = new EventEmitter();
    formGroup: FormGroup;
    
    breaks: any[] = [
        // { value: 5, label: '5 хв'},
        { value: 10, label: '10 хв'},
        { value: 15, label: '15 хв'},
        { value: 20, label: '20 хв'},
        { value: 25, label: '25 хв'},
    ]

    breaksCtrls: any[] = [];

    constructor(
            private _formBuilder: FormBuilder,
            private _scheduleService: ScheduleService
        ) {
    }
    ngOnInit () {
        this.formGroup = this._formBuilder.group({
            nameCtrl: ['Розклад 1', Validators.required],
            // firstClassCtrl: [false, Validators.required],
            // secondClassCtrl: [false, Validators.required],
            // thirdClassCtrl: [false, Validators.required],
            firstClassCtrl: [true, Validators.required],
            secondClassCtrl: [true, Validators.required],
            thirdClassCtrl: [true, Validators.required],
            firstLessonCtrl: ['08:00', Validators.required],
            // firstBreakCtrl: ['', Validators.required],
            // secondBreakCtrl: ['', Validators.required],
            // thirdBreakCtrl: ['', Validators.required],
            // fourthBreakCtrl: ['', Validators.required],
            // fifthBreakCtrl: ['', Validators.required],
            // sixthBreakCtrl: ['', Validators.required],
            // seventhBreakCtrl: ['', Validators.required]
            firstBreakCtrl: [10, Validators.required],
            secondBreakCtrl: [10, Validators.required],
            thirdBreakCtrl: [10, Validators.required],
            fourthBreakCtrl: [10, Validators.required],
            fifthBreakCtrl: [10, Validators.required],
            sixthBreakCtrl: [10, Validators.required],
            seventhBreakCtrl: [10, Validators.required]
        });
        this.breaksCtrls.push({placeholder: '1-а перерва', ctrlName: 'firstBreakCtrl'});
        this.breaksCtrls.push({placeholder: '2-а перерва', ctrlName: 'secondBreakCtrl'});
        this.breaksCtrls.push({placeholder: '3-я перерва', ctrlName: 'thirdBreakCtrl'});
        this.breaksCtrls.push({placeholder: '4-а перерва', ctrlName: 'fourthBreakCtrl'});
        this.breaksCtrls.push({placeholder: '5-а перерва', ctrlName: 'fifthBreakCtrl'});
        this.breaksCtrls.push({placeholder: '6-та перерва', ctrlName: 'sixthBreakCtrl'});
        this.breaksCtrls.push({placeholder: '7-а перерва', ctrlName: 'seventhBreakCtrl'});
    }
    addSchedule() {
        this.onScheduleAdding.emit();
        // save the schedule
        let data = {
            name: this.formGroup.controls.nameCtrl.value,
            forClass: {
                first: this.formGroup.controls.firstClassCtrl.value,
                second: this.formGroup.controls.secondClassCtrl.value,
                third: this.formGroup.controls.thirdClassCtrl.value,
            }, 
            firstLessonStart: this.formGroup.controls.firstLessonCtrl.value,
            breaks: [
                this.formGroup.controls.firstBreakCtrl.value,
                this.formGroup.controls.secondBreakCtrl.value,
                this.formGroup.controls.thirdBreakCtrl.value,
                this.formGroup.controls.fourthBreakCtrl.value,
                this.formGroup.controls.fifthBreakCtrl.value,
                this.formGroup.controls.sixthBreakCtrl.value,
                this.formGroup.controls.seventhBreakCtrl.value
            ]
        };
        this._scheduleService.add(data)
        // console.log(data);
    }
    isFormValid() {
        return this.formGroup.controls.nameCtrl.valid && (
            this.formGroup.controls.firstClassCtrl.value ||
            this.formGroup.controls.secondClassCtrl.value ||
            this.formGroup.controls.thirdClassCtrl.value )&&
            this.formGroup.controls.firstLessonCtrl.valid &&
            this.formGroup.controls.firstBreakCtrl.valid &&
            this.formGroup.controls.secondBreakCtrl.valid &&
            this.formGroup.controls.thirdBreakCtrl.valid &&
            this.formGroup.controls.fourthBreakCtrl.valid &&
            this.formGroup.controls.fifthBreakCtrl.valid &&
            this.formGroup.controls.sixthBreakCtrl.valid &&
            this.formGroup.controls.seventhBreakCtrl.valid 
            ? true : false;
    }
    getErrorMessage(field) {
        return field.hasError('required') ? 'Значання не має бути пустим' :
                '';
    }
}
