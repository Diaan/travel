import { Observable } from 'rxjs';
import { ItineraryService, Day } from '../core/itinerary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ta-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {
  days: Observable<Day[]>;

  constructor(private itineraryService: ItineraryService) { }

  ngOnInit() {
    this.days = this.itineraryService.itinerary;
  }
}