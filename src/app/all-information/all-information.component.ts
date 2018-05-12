import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-information',
  templateUrl: './all-information.component.html',
  styleUrls: ['./all-information.component.scss']
})
export class AllInformationComponent {
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
}