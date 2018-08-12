import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { tap, map, filter, flatMap } from 'rxjs/operators';

export interface City {
  id: string;
  name: string;
}

export interface Destination extends City {
  image?: string[];
  highlights: Highlight[];
}

export interface Highlight {
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  name: string;
  type: string;

}

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private destinations: Observable<Destination[]>;
  private _destinations: Partial<Destination[]> = [];

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

  destinationDetails(id): Observable<Destination> {
    return this.destinations.pipe(
      flatMap(destinations => destinations),
      filter(destination => destination.id === id)
    );
  }

  destinationName(id): Observable<string> {
    return this.destinations.pipe(
      flatMap(destinations => destinations),
      filter(destination => destination.id === id),
      map(destination => destination.name)
    );
  }

  private query(): Observable<any[]> {
    return this.db.list('flamelink/environments/production/content/destinations/en-US').valueChanges();
  }
}
