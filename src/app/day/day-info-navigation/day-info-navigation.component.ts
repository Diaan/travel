import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ta-day-info-navigation',
  templateUrl: './day-info-navigation.component.html',
  styleUrls: ['./day-info-navigation.component.scss']
})
export class DayInfoNavigationComponent implements OnInit {

  @Input () currentDay: number;
  @Input () tab: string;

  constructor() { }

  ngOnInit() {
  }
}
