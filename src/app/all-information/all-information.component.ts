import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-all-information',
  templateUrl: './all-information.component.html',
  styleUrls: ['./all-information.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AllInformationComponent {
  menuState = 'out';
  tabs: any[] = [
    // { name: 'Rozklad 1'},
    // { name: 'Rozklad 2'},
    // { name: 'Rozklad 3'}
  ]
  constructor(

            ) {
            }

  add() {
    this.tabs.push({ name: 'New Rozklad'})
  }
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}