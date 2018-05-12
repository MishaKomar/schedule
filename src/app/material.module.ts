import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
         MatInputModule, 
         MatToolbarModule,
         MatCardModule,
         MatFormFieldModule,
         MatProgressSpinnerModule,
         MatTabsModule,
         MatIconModule,
         MatCheckboxModule,
         MatStepperModule,
         MatSelectModule,
         MatRadioModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatExpansionModule,
         MatSlideToggleModule,
         MatTableModule,
         MatListModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTableModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTableModule,
    MatListModule
  ],
})
export class MaterialModule { }