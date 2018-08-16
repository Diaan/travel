import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { DayComponent } from './day.component';
import { DayDescriptionComponent } from './day-description/day-description.component';
import { DayInfoNavigationComponent } from './day-info-navigation/day-info-navigation.component';
import { DayNavigationComponent } from './day-navigation/day-navigation.component';
import { DayPhotosComponent } from './day-photos/day-photos.component';
import { DayPlacesComponent } from './day-places/day-places.component';

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
