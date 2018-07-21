import { DestinationService, Destination, City } from './core/destination.service';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'travel app';
  items: City[];
  selectedDestination: Observable<Destination>;

  // get items (): Observable<City[]> {
  //   return of([]);
  //   // return this.destinations.cities;
  // }

  constructor (
    private destinations: DestinationService
  ) {}

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.destinations.cities.subscribe(cities => this.items = cities);
  }

  selectDestination(item) {
    console.log(item);
    this.selectedDestination = this.destinations.destinationDetails(item.id);
  }
}
