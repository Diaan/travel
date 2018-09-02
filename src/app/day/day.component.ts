import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DayDetails } from '@core/itinerary.service';
import { BackgroundImageService } from '@core/background-image.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ta-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  day: DayDetails;
  tab: string;
  dayNumber: number;

  constructor(
    private route: ActivatedRoute,
    private background: BackgroundImageService
  ) { }

  ngOnInit() {
    this.day = this.route.snapshot.data.day;
    this.background.setBackgroundByDestination(this.day.start);

    this.route.data.pipe(
      map(({ day }) => day)
    ).subscribe(day => {
      this.background.setBackgroundByDestination(day.start);
    });
  }
}
