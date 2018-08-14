import { Observable } from 'rxjs';
import { DayDetails } from './../../core/itinerary.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ta-day-header',
  templateUrl: './day-header.component.html',
  styleUrls: ['./day-header.component.scss']
})
export class DayHeaderComponent {
  @Input() day: Observable<DayDetails>;
}
