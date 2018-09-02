import { Component, OnInit } from '@angular/core';
import { DayDetails } from '@core/itinerary.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'ta-day-description',
  templateUrl: './day-description.component.html',
  styleUrls: ['./day-description.component.scss']
})
export class DayDescriptionComponent implements OnInit  {
  day: Observable<DayDetails>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.day = this.route.parent.data.pipe(
      map(({ day }) => day)
    );
  }
}
