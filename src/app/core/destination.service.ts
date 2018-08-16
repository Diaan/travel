import { Highlight } from './destination.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { tap, map, filter, flatMap, reduce, concatMap, scan } from 'rxjs/operators';

export interface City {
  id: string;
  name: string;
}

export interface Destination extends City {
  image?: string[];
  highlights: Highlight[];
}

export interface Highlight {
  location: HighlightLocation;
  name: string;
  type: string;

}

export interface HighlightLocation {
  address: string;
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private destinations: Observable<Destination[]>;

  constructor(private db: AngularFireDatabase) {
    this.destinations = this.query();
  }

  get cities(): Observable<City[]> {
    return this.destinations.pipe(
      map( destinations => destinations.map( city => ({
            name: city.name,
            id: city.id
          }))
      )
    );
  }

  destinationDetails(id: string): Observable<Destination> {
    return this.destinations.pipe(
      flatMap(destinations => destinations),
      filter(destination => destination.id === id)
    );
  }

  destinationName(id: string): Observable<string> {
    return this.destinations.pipe(
      flatMap(destinations => destinations),
      filter(destination => destination.id === id),
      map(destination => destination.name)
    );
  }

  highlights(ids: string[]): Observable<Highlight[]> {
    return this.destinations.pipe(
      flatMap(destinations => destinations),
      filter(destination => !!destination.highlights && ids.includes(destination.id)),
      map(destination => destination.highlights),
      scan((a, b) => a.concat(b), [])
    );
  }

  private query(): Observable<Destination[]> {
    return this.db.list<Destination>('flamelink/environments/production/content/destinations/en-US').valueChanges();
  }
}
