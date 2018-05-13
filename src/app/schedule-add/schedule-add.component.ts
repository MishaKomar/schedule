import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
            private _formBuilder: FormBuilder
        ) {
    }
    ngOnInit () {
        this.formGroup = this._formBuilder.group({
            nameCtrl: ['Розклад 1', Validators.required],
            firstClassCtrl: [false, Validators.required],
            secondClassCtrl: [false, Validators.required],
            thirdClassCtrl: [false, Validators.required],
            firstLessonCtrl: ['08:30', Validators.required],
            firstBreakCtrl: ['', Validators.required],
            secondBreakCtrl: ['', Validators.required],
            thirdBreakCtrl: ['', Validators.required],
            fourthBreakCtrl: ['', Validators.required],
            fifthBreakCtrl: ['', Validators.required],
            sixthBreakCtrl: ['', Validators.required],
            seventhBreakCtrl: ['', Validators.required]
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
            firstLesson: this.formGroup.controls.firstLessonCtrl.value,
            firstBreak: this.formGroup.controls.firstBreakCtrl.value,
            secondBreak: this.formGroup.controls.secondBreakCtrl.value,
            thirdBreak: this.formGroup.controls.thirdBreakCtrl.value,
            fourthBreak: this.formGroup.controls.fourthBreakCtrl.value,
            fifthBreak: this.formGroup.controls.fifthBreakCtrl.value,
            sixthBreak: this.formGroup.controls.sixthBreakCtrl.value,
            seventhBreak: this.formGroup.controls.seventhBreakCtrl.value
        };

        console.log(data);
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
