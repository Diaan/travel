import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackgroundImageService } from '@core/background-image.service';

export interface BackgroundImage {
  id?: number;
  url?: string;
}

@Component({
  selector: 'ta-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  image: Observable<BackgroundImage>;

  constructor(private background: BackgroundImageService) { }

  ngOnInit() {
    this.image = this.background.image;
  }
}
