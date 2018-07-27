import { SharedModule } from './../shared/shared.module';
import { DayPhotosComponent } from './day-photos/day-photos.component';
import { DayPlacesComponent } from './day-places/day-places.component';
import { DayDescriptionComponent } from './day-description/day-description.component';
import { DayComponent } from './day.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayNavigationComponent } from './day-navigation/day-navigation.component';
import { RouterModule } from '@angular/router';
import { DayInfoNavigationComponent } from './day-info-navigation/day-info-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    DayComponent,
    DayDescriptionComponent,
    DayPlacesComponent,
    DayPhotosComponent,
    DayNavigationComponent,
    DayInfoNavigationComponent
  ]
})
export class DayModule { }
