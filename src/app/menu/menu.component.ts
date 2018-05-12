import { Component, OnInit } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // animations: [
  //   trigger('slideInOut', [
  //     state('in', style({
  //       transform: 'translate3d(0, 0, 0)'
  //     })),
  //     state('out', style({
  //       transform: 'translate3d(100%, 0, 0)'
  //     })),
  //     transition('in => out', animate('400ms ease-in-out')),
  //     transition('out => in', animate('400ms ease-in-out'))
  //   ]),
  // ]
})
export class MenuComponent {
  menuState = 'out';
  constructor(
              // public router: Router,
              // public route: ActivatedRoute
            ) {
            }
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  isRoute(route: string) {
    // return this.router.url.indexOf(route) !== -1
  }
}