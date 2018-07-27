import { CityNamePipe } from './city-name.pipe';
import { DayNumberComponent } from './day-number/day-number.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DayNumberComponent,
    CityNamePipe
  ],
  exports: [
    DayNumberComponent,
    CityNamePipe
  ]
})
export class SharedModule { }
