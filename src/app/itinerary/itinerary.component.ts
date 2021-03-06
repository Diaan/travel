import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackgroundImageService } from '@core/background-image.service';
import { ItineraryService, Day } from '@core/itinerary.service';

@Component({
  selector: 'ta-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {
  days: Observable<Day[]>;

  constructor(
    private itineraryService: ItineraryService,
    private background: BackgroundImageService
  ) { }

  ngOnInit() {
    this.days = this.itineraryService.itinerary;
    this.background.setBackground(1532266037782);
  }
}
