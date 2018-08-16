import { switchMap, tap, map, flatMap, concatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DestinationService, Highlight } from './../../core/destination.service';
import { DayDetails } from './../../core/itinerary.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ta-day-places',
  templateUrl: './day-places.component.html',
  styleUrls: ['./day-places.component.scss']
})
export class DayPlacesComponent implements OnInit {
  places: Observable<Highlight[]>;
  activePlace: Highlight;

  @Input() day: Observable<DayDetails>;

  constructor(
    private destinationService: DestinationService
  ) { }

  ngOnInit() {
    this.places = this.day.pipe(
      switchMap(day => this.destinationService.highlights(day.placesFrom))
    );
  }

  toggleActive(place) {
    if (this.activePlace === place) {
      this.activePlace = null;
    } else {
      this.activePlace = place;
    }
  }
}
