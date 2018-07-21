import { Destination } from './destination.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { tap, map, filter, flatMap } from 'rxjs/operators';

export interface City {
  id: string;
  name: string;
}

export interface Destination extends City {
  highlights: any[];
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

  private query(): Observable<any[]> {
    return this.db.list('flamelink/environments/production/content/destinations/en-US').valueChanges();
  }

  destinationDetails(id): Observable<Destination> {
    console.log({id});
    return this.destinations.pipe(
      flatMap(destinations => destinations),
      filter(destination => destination.id === id) // destination.id === id)
    );
  }
}
