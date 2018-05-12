import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss']
})
export class MenuSideComponent implements OnInit {

    @Output() onToogle = new EventEmitter();

    constructor(
        ) {
    }
    toggleMenu() {
        // 1-line if statement that toggles the value:
        // this.menuState = this.menuState === 'out' ? 'in' : 'out';
        this.onToogle.emit();
    }

    ngOnInit () {

    }
}
