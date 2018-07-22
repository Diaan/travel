import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { tap, map, filter, flatMap } from 'rxjs/operators';

export interface Day {
  id: string;
  day: number;
  date?: string;
  start: string;
  end: string;
}

export interface DayDetails extends Day {
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private days: Observable<DayDetails[]>;
  private _days: Partial<DayDetails[]> = [];

  get itinerary(): Observable<Day[]> {
    return this.days.pipe(
      map( days => days.map(day => ({
            id: day.id,
            date: day.date,
            day: day.day,
            start: day.start,
            end: day.end
          }))
      )
    );
  }

  constructor(private db: AngularFireDatabase) {
    this.days = this.query();
  }

  private query(): Observable<any[]> {
    return this.db.list('flamelink/environments/production/content/schemaDemo/en-US').valueChanges();
  }
}
