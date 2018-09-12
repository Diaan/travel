import { CityNamePipe } from './city-name.pipe';
import { CommonModule } from '@angular/common';
import { DayHeaderComponent } from './day-header/day-header.component';
import { DayNumberComponent } from './day-number/day-number.component';
import { FlickrPhotoModule } from './flickr-photo/flickr-photo.module';
import { MapsUrlPipe } from './maps-url.pipe';
import { NgModule } from '@angular/core';
import { PlaceIconComponent } from './place-icon/place-icon.component';

@NgModule({
  imports: [
    CommonModule,
    FlickrPhotoModule
  ],
  declarations: [
    CityNamePipe,
    DayNumberComponent,
    DayHeaderComponent,
    PlaceIconComponent,
    MapsUrlPipe
  ],
  exports: [
    CityNamePipe,
    DayNumberComponent,
    DayHeaderComponent,
    MapsUrlPipe,
    PlaceIconComponent
  ]
})
export class SharedModule { }
