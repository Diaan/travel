import { TestBed, inject } from '@angular/core/testing';

import { BackgroundImageService } from './background-image.service';

describe('BackgroundImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackgroundImageService]
    });
  });

  xit('should be created', inject([BackgroundImageService], (service: BackgroundImageService) => {
    expect(service).toBeTruthy();
  }));
});
