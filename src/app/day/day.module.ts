import { DayPhotosComponent } from './day-photos/day-photos.component';
import { DayPlacesComponent } from './day-places/day-places.component';
import { DayDescriptionComponent } from './day-description/day-description.component';
import { DayComponent } from './day.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayNavigationComponent } from './day-navigation/day-navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DayComponent,
    DayDescriptionComponent,
    DayPlacesComponent,
    DayPhotosComponent,
    DayNavigationComponent
  ]
})
export class DayModule { }
