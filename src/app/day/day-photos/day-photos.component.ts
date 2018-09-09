import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DayDetails } from '@core/itinerary.service';
import { PhotoService } from '@core/photo.service';
import { map, switchMap  } from 'rxjs/operators';

@Component({
  selector: 'ta-day-photos',
  templateUrl: './day-photos.component.html',
  styleUrls: ['./day-photos.component.scss']
})
export class DayPhotosComponent implements OnInit {
  photos: Observable<any>;
  day: Observable<DayDetails>;

  constructor(
    private service: PhotoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.day = this.route.parent.data.pipe(
      map(({ day }) => day)
    );

    this.photos = this.day.pipe(
      switchMap(day => this.service.photos(day.day)),
      map(photos => photos.photo)
    );
  }

}
