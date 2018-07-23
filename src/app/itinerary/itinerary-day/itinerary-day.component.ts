import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../../core/itinerary.service';

@Component({
  selector: 'ta-itinerary-day',
  templateUrl: './itinerary-day.component.html',
  styleUrls: ['./itinerary-day.component.scss']
})
export class ItineraryDayComponent implements OnInit {

  @Input() day: Day;

  constructor() { }

  ngOnInit() {
  }

}
