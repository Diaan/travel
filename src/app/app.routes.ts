import { ItineraryComponent } from './itinerary/itinerary.component';
import { Routes } from '@angular/router';
import { DayComponent } from './day/day.component';


export const AppRoutes: Routes = [
  {path: '', component: ItineraryComponent},
  {path: 'day/:dayNumber', component: DayComponent}
];
