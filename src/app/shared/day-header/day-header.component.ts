import { DayDetails } from '@core/itinerary.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ta-day-header',
  templateUrl: './day-header.component.html',
  styleUrls: ['./day-header.component.scss']
})
export class DayHeaderComponent implements OnInit {
  day: Observable<DayDetails>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.day = this.route.data.pipe(
      map(({ day }) => day)
    );
  }
}
