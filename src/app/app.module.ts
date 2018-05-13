import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './menu/menu.component';
import { MenuSideComponent } from './menu-side/menu-side.component';
import { ContentComponent } from './content/content.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { AllInformationComponent } from './all-information/all-information.component';
import { ScheduleAddComponent } from './schedule-add/schedule-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuSideComponent,
    ContentComponent,
    ContentHeaderComponent,
    AllInformationComponent,
    ScheduleAddComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
