import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DayDetails } from '@core/itinerary.service';

@Component({
  selector: 'ta-day-description',
  templateUrl: './day-description.component.html',
  styleUrls: ['./day-description.component.scss']
})
export class DayDescriptionComponent {
  @Input() day: Observable<DayDetails>;
}
