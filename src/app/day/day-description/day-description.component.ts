import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { DayDetails } from '../../core/itinerary.service';

@Component({
  selector: 'ta-day-description',
  templateUrl: './day-description.component.html',
  styleUrls: ['./day-description.component.scss']
})
export class DayDescriptionComponent implements OnInit {

  @Input() day: Observable<DayDetails>;

  constructor() { }

  ngOnInit() {
  }

}
