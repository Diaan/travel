import { FlickrPhotoModule } from './flickr-photo.module';

describe('FlickrPhotoModule', () => {
  let flickrPhotoModule: FlickrPhotoModule;

  beforeEach(() => {
    flickrPhotoModule = new FlickrPhotoModule();
  });

  it('should create an instance', () => {
    expect(flickrPhotoModule).toBeTruthy();
  });
});
