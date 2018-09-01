import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ItineraryService, DayDetails } from '@core/itinerary.service';
import { Observable } from 'rxjs';

@Injectable()
export class DayResolver implements Resolve<DayDetails> {
  constructor(private service: ItineraryService) {}

  resolve(route): Observable<DayDetails> {
    // tslint:disable-next-line:radix
    return this.service.day(parseInt(route.params.dayNumber));
  }
}
