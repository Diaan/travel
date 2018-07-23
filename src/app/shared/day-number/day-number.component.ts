import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ta-day-number',
  templateUrl: './day-number.component.html',
  styleUrls: ['./day-number.component.scss']
})
export class DayNumberComponent implements OnInit {

  @Input() number: string;

  constructor() { }

  ngOnInit() {
  }

}
