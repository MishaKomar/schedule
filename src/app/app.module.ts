import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './menu/menu.component';
import { MenuSideComponent } from './menu-side/menu-side.component';
import { ContentComponent } from './content/content.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ContentMainComponent } from './content-main/content-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuSideComponent,
    ContentComponent,
    ContentHeaderComponent,
    ContentMainComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
