import { CityNamePipe } from './city-name.pipe';
import { DayNumberComponent } from './day-number/day-number.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayHeaderComponent } from './day-header/day-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityNamePipe,
    DayNumberComponent,
    DayHeaderComponent
  ],
  exports: [
    CityNamePipe,
    DayNumberComponent,
    DayHeaderComponent
  ]
})
export class SharedModule { }
