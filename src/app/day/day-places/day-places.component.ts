import { Component, OnInit } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { DestinationService, Highlight } from '@core/destination.service';
import { DayDetails } from '@core/itinerary.service';
import { ActivatedRoute } from '@angular/router';

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
  types = ['hotel', 'museum', 'temple', 'restaurant', 'shop', 'garden', 'landmark'];
  day: Observable<DayDetails>;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService
  ) { }

  ngOnInit() {
    this.day = this.route.parent.data.pipe(
      map(({ day }) => day)
    );

    this.places = this.day.pipe(
      switchMap(day => this.destinationService.highlights(day.placesFrom))
    );

    this.filteredPlaces = combineLatest(
      this.filterChange,
      this.places
    ).pipe(
      map(([type, places]) => places.filter(place => !!place && (type === '' || place.type === type))),
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
