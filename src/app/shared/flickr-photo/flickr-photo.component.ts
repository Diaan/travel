import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '@core/photo.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ta-flickr-photo',
  templateUrl: './flickr-photo.component.html',
  styleUrls: ['./flickr-photo.component.scss']
})
export class FlickrPhotoComponent implements OnInit {
  enrichedPhoto: Observable<any>;

  @Input() photo: any;
  constructor(private service: PhotoService) { }

  ngOnInit() {
    this.enrichedPhoto = this.service.enrich(this.photo);
  }

}
