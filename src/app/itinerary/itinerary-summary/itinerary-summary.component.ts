import { Component, Input } from '@angular/core';
import { Day } from '@core/itinerary.service';

@Component({
  selector: 'ta-itinerary-summary',
  templateUrl: './itinerary-summary.component.html',
  styleUrls: ['./itinerary-summary.component.scss']
})
export class ItinerarySummaryComponent {
  @Input() day: Day;
}
