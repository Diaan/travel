import { tap, map } from 'rxjs/operators';
import { ItineraryService } from './../../core/itinerary.service';
import { Component, OnInit, Input } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'ta-day-navigation',
  templateUrl: './day-navigation.component.html',
  styleUrls: ['./day-navigation.component.scss']
})
export class DayNavigationComponent implements OnInit {
  navigationDays: Observable<number[]>;

  @Input() currentDay: number;


  constructor(private itineraryService: ItineraryService) { }

  ngOnInit() {
    this.navigationDays = this.itineraryService.navigationDays.pipe(
      map( days => {
        let start;
        const index = days.indexOf(this.currentDay);
        if (index === 0) {
          start = 0;
        } else if (days.length - index < 3) {
          start = days.length - 4;
        } else {
          start = index - 1;
        }

        return days.slice(start, start + 4);
      })
    );
  }

}
