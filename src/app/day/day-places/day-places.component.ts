import { Day } from './../../core/itinerary.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ta-day-places',
  templateUrl: './day-places.component.html',
  styleUrls: ['./day-places.component.scss']
})
export class DayPlacesComponent implements OnInit {

  @Input() day: Day;

  constructor() { }

  ngOnInit() {
  }

}
