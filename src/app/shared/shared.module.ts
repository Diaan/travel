import { CityNamePipe } from './city-name.pipe';
import { DayNumberComponent } from './day-number/day-number.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayHeaderComponent } from './day-header/day-header.component';
import { PlaceIconComponent } from './place-icon/place-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityNamePipe,
    DayNumberComponent,
    DayHeaderComponent,
    PlaceIconComponent
  ],
  exports: [
    CityNamePipe,
    DayNumberComponent,
    DayHeaderComponent,
    PlaceIconComponent
  ]
})
export class SharedModule { }
