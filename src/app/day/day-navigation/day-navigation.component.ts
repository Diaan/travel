import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';
import { ItineraryService } from '@core/itinerary.service';

@Component({
  selector: 'ta-day-navigation',
  templateUrl: './day-navigation.component.html',
  styleUrls: ['./day-navigation.component.scss']
})
export class DayNavigationComponent implements OnInit, OnChanges {
  navigationDays: Observable<number[]>;
  dayChange = new Subject<number>();

  @Input() currentDay: number;

  constructor(private itineraryService: ItineraryService) { }

  ngOnChanges(changes) {
    this.dayChange.next(changes.currentDay.currentValue);
  }

  ngOnInit() {
    this.navigationDays = this.dayChange.pipe(
      startWith(this.currentDay),
      switchMap(currentDay => this.itineraryService.navigationDays.pipe(
        map(days => {
          let start;
          const index = days.indexOf(currentDay);
          if (index === 0) {
            start = 0;
          } else if (days.length - index < 3) {
            start = days.length - 4;
          } else {
            start = index - 1;
          }

          return days.slice(start, start + 4);
        })
      ))
    );
  }
}
