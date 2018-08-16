import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ItineraryService, DayDetails } from '@core/itinerary.service';
import { BackgroundImageService } from '@core/background-image.service';

@Component({
  selector: 'ta-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  day: Observable<DayDetails>;
  tab: string;
  dayNumber: number;

  constructor(
    private itinerary: ItineraryService,
    private activatedRoute: ActivatedRoute,
    private background: BackgroundImageService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((route: ParamMap) => {
      // tslint:disable-next-line:radix
      this.dayNumber = parseInt(route.get('dayNumber'));
      this.tab = route.get('tab') || 'description';
      this.day = this.itinerary.day(this.dayNumber).pipe(
        tap(day => {
        this.background.setBackgroundByDestination(day.start);
      }));
    });
  }
}
