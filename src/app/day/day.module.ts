import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { DayComponent } from './day.component';
import { DayResolver } from './day-resolver.service';
import { DayDescriptionComponent } from './day-description/day-description.component';
import { DayInfoNavigationComponent } from './day-info-navigation/day-info-navigation.component';
import { DayNavigationComponent } from './day-navigation/day-navigation.component';
import { DayPhotosComponent } from './day-photos/day-photos.component';
import { DayPlacesComponent } from './day-places/day-places.component';
import { FlickrPhotoModule } from '@shared/flickr-photo/flickr-photo.module';
import { DialogModule } from '@angular/cdk-experimental/dialog';

const routes: Routes = [
  {
    path: 'day/:dayNumber',
    component: DayComponent,
    resolve: {
      day: DayResolver
    },
    children: [
      { path: 'description', component: DayDescriptionComponent},
      { path: 'places', component: DayPlacesComponent},
      { path: 'photos', component: DayPhotosComponent}
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    SharedModule,
    DialogModule,
    FlickrPhotoModule
  ],
  declarations: [
    DayComponent,
    DayDescriptionComponent,
    DayPlacesComponent,
    DayPhotosComponent,
    DayNavigationComponent,
    DayInfoNavigationComponent
  ],
  providers: [
    DayResolver
  ]
})
export class DayModule { }
