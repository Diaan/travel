import { TestBed, inject } from '@angular/core/testing';

import { FlickrPhotoService } from './flickr-photo.service';

describe('FlickrPhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickrPhotoService]
    });
  });

  it('should be created', inject([FlickrPhotoService], (service: FlickrPhotoService) => {
    expect(service).toBeTruthy();
  }));
});
