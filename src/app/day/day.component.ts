import { Observable } from 'rxjs';
import { ItineraryService, DayDetails } from './../core/itinerary.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'ta-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  day: Observable<DayDetails>;
  dayNumber: number;

  constructor(private itinerary: ItineraryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((route: ParamMap) => {
      this.dayNumber = parseInt(route.get('dayNumber'));
      this.day = this.itinerary.day(this.dayNumber);
    });
  }

}
