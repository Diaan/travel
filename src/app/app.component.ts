import { DestinationService, Destination, City } from './core/destination.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cities: City[];

  constructor (private destinationService: DestinationService) {}

  ngOnInit() {
    // refactor to observables (start with?)
    this.getCities();
  }

  getCities() {
    this.destinationService.cities.subscribe(cities => this.cities = cities);
  }
}
