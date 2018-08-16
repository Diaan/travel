import { Component, OnInit, Input } from '@angular/core';
import { Day } from '@core/itinerary.service';

@Component({
  selector: 'ta-day-photos',
  templateUrl: './day-photos.component.html',
  styleUrls: ['./day-photos.component.scss']
})
export class DayPhotosComponent implements OnInit {

  @Input() day: Day;
  constructor() { }

  ngOnInit() {
  }

}
