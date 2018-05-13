import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

    constructor(
        ) {
    }

    static addMinutes(timeParam: string, minutes: number):string { // time like HH:MM, minutes only number
        let time = [parseInt(timeParam.split(':')[0], 10), parseInt(timeParam.split(':')[1], 10)];
        let sum = time[1] + minutes;
        if (sum > 59) {
            time[0] = time[0] + 1;
            time[1] = sum - 60;
        } else {
            time[1] = sum;
        }

        let end = '';
        end = time[0] < 10 ? '0' + time[0] : time[0].toString();  
        end = time[1] < 10 ? end + ':' + '0' + time[1] : end + ':' + time[1].toString();
        return end;
    }
}
