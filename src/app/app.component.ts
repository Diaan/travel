import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinationService, City } from '@core/destination.service';

@Component({
  selector: 'ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cities: Observable<City[]>;

  constructor (
    private destinationService: DestinationService
  ) {}

  ngOnInit() {
    this.cities = this.destinationService.cities;
  }
}
