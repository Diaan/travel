import { Component, OnInit, Input } from '@angular/core';
import { switchMap, tap, flatMap, map, distinct, scan } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DestinationService, Highlight } from '@core/destination.service';
import { DayDetails } from '@core/itinerary.service';

@Component({
  selector: 'ta-day-places',
  templateUrl: './day-places.component.html',
  styleUrls: ['./day-places.component.scss']
})
export class DayPlacesComponent implements OnInit {
  activePlace: Highlight;
  places: Observable<Highlight[]>;
  types: Observable<string[]>;
  currentFilter: string;

  @Input() day: Observable<DayDetails>;

  constructor(
    private destinationService: DestinationService
  ) { }

  ngOnInit() {
    this.places = this.day.pipe(
      switchMap(day => this.destinationService.highlights(day.placesFrom))
    );

    this.types = this.places.pipe(
      flatMap(p => p),
      distinct(function (p) { return p.type; }),
      map(p => p.type),
      scan((a, b) => a.concat(b), [])
    );
  }

  toggleActive(place) {
    if (this.activePlace === place) {
      this.activePlace = null;
    } else {
      this.activePlace = place;
    }
  }

  filter(type) {
    if (this.currentFilter === type) {
      this.currentFilter = null;
    } else {
      this.currentFilter = type;
    }
    console.log(type);
  }
}
