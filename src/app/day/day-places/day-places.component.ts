import { Component, OnInit, Input } from '@angular/core';
import { switchMap, tap, flatMap, map, distinct, scan, startWith, mergeMap } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { DestinationService, Highlight } from '@core/destination.service';
import { DayDetails } from '@core/itinerary.service';

@Component({
  selector: 'ta-day-places',
  templateUrl: './day-places.component.html',
  styleUrls: ['./day-places.component.scss']
})
export class DayPlacesComponent implements OnInit {
  activePlace: Highlight;
  currentFilter: string;
  filterChange = new BehaviorSubject('');
  filteredPlaces: Observable<Highlight[]>;
  places: Observable<Highlight[]>;
  types: Observable<string[]>;

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

    this.filteredPlaces = combineLatest(
      this.filterChange,
      this.places
    ).pipe(
      map(([type, places]) => places.filter(place => type === '' || place.type === type))
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
      this.currentFilter = '';
    } else {
      this.currentFilter = type;
    }
    this.filterChange.next(this.currentFilter);
  }
}
