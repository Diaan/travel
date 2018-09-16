import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlickrPhotoComponent } from './flickr-photo.component';
import { SizeUrlPipe } from './size-url.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlickrPhotoComponent, SizeUrlPipe],
  exports: [FlickrPhotoComponent]
})
export class FlickrPhotoModule { }
