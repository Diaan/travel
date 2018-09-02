import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';
import { ItineraryService } from '@core/itinerary.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ta-day-navigation',
  templateUrl: './day-navigation.component.html',
  styleUrls: ['./day-navigation.component.scss']
})
export class DayNavigationComponent implements OnInit {
  navigationDays: Observable<number[]>;
  dayChange = new Subject<number>();

  @Input() currentDay: number;
  @Input() tab: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itineraryService: ItineraryService
  ) { }

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

  switchDay(day) {
    this.currentDay = day;
    this.dayChange.next(day);
    this.router.navigate(['../', day, this.getActiveTab()], { relativeTo: this.route });
  }

  private getActiveTab(): string {
    return this.route.snapshot.firstChild &&
           this.route.snapshot.firstChild.routeConfig &&
           this.route.snapshot.firstChild.routeConfig.path;
  }
}
