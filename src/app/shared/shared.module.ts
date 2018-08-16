import { CityNamePipe } from './city-name.pipe';
import { DayNumberComponent } from './day-number/day-number.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayHeaderComponent } from './day-header/day-header.component';
import { PlaceIconComponent } from './place-icon/place-icon.component';
import { MapsUrlPipe } from './maps-url.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityNamePipe,
    DayNumberComponent,
    DayHeaderComponent,
    PlaceIconComponent,
    MapsUrlPipe
  ],
  exports: [
    CityNamePipe,
    DayNumberComponent,
    DayHeaderComponent,
    MapsUrlPipe,
    PlaceIconComponent
  ]
})
export class SharedModule { }
