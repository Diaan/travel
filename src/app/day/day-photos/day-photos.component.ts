import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DayDetails } from '@core/itinerary.service';
import { PhotoService } from '@core/photo.service';
import { map, switchMap  } from 'rxjs/operators';
import { Dialog, DialogRef } from '@angular/cdk-experimental/dialog';

@Component({
  selector: 'ta-day-photos',
  templateUrl: './day-photos.component.html',
  styleUrls: ['./day-photos.component.scss']
})
export class DayPhotosComponent implements OnInit {
  photos: any;
  day: Observable<DayDetails>;
  enlargedPhoto: any;
  dialogRef: any;
  enlargedPhotoIndex: number;

  @ViewChild('photoOverlay', { read: TemplateRef }) photoOverlay: TemplateRef<any>;
  constructor(
    private service: PhotoService,
    private route: ActivatedRoute,
    private dialog: Dialog
  ) { }

  ngOnInit() {

    this.day = this.route.parent.data.pipe(
      map(({ day }) => day)
    );

    this.day.pipe(
      switchMap(day => this.service.photos(day.day)),
      map(photos => photos.photo)
    ).subscribe(photos => this.photos = photos);
  }

  openPhoto(photo) {
    this.enlargedPhoto = photo;
    this.enlargedPhotoIndex = this.photos.findIndex(p => p.id === this.enlargedPhoto.id);
    if (!this.dialogRef || (this.dialogRef && this.dialogRef.componentInstance === null)) {
      this.dialogRef = this.dialog.openFromTemplate(this.photoOverlay, {
        maxWidth: '100vw'
      });
    }
  }

  close() {
    console.log('close');
    this.dialogRef.close();
  }

  previous() {
    this.openPhoto(this.photos[this.enlargedPhotoIndex - 1]);
  }

  next() {
    this.openPhoto(this.photos[this.enlargedPhotoIndex + 1]);
  }
}
