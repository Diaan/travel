import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhotoService } from '@core/photo.service';

@Component({
  selector: 'ta-flickr-photo',
  templateUrl: './flickr-photo.component.html',
  styleUrls: ['./flickr-photo.component.scss']
})
export class FlickrPhotoComponent implements OnInit {

  @Input() photo: any;
  @Input() size: string;

  constructor(private service: PhotoService) { }

  ngOnInit() {
    if (!this.photo.sizes) {
      this.service.enrich(this.photo).subscribe(photo => {
        if (photo.size) {
          this.photo.sizes = photo.size;
        }
      });
    }
  }
}
