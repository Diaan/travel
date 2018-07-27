import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { tap, map, filter, flatMap, take, pluck } from 'rxjs/operators';

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

  get navigationDays(): Observable<number[]> {
    return this.days.pipe<number[]>(
      map( days => days.map(day => day.day))
    );
  }

  constructor(private db: AngularFireDatabase) {
    this.days = this.query();
  }

  day(number): Observable<DayDetails> {
    return this.days.pipe(
      flatMap(days => days),
      filter(day => day.day === number)
    );
  }

  private query(): Observable<any[]> {
    return this.db.list('flamelink/environments/production/content/schemaDemo/en-US').valueChanges();
  }
}
