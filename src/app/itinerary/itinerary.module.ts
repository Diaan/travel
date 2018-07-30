import { RouterModule } from '@angular/router';
import { ItinerarySummaryComponent } from './itinerary-summary/itinerary-summary.component';
import { ItineraryComponent } from './itinerary.component';
import { ItineraryDayComponent } from './itinerary-day/itinerary-day.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    ItineraryComponent,
    ItineraryDayComponent,
    ItinerarySummaryComponent
  ]
})
export class ItineraryModule { }
