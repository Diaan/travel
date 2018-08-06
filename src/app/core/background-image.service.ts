import { DestinationService } from './destination.service';
import { tap, switchMap, map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { BackgroundImage } from '../shared/image/image.component';

export interface ImageSet {
  contentType: string;
  file: string;
  folderId: number;
  id: number;
  sizes: ImageSize[];
}

export interface ImageSize {
  height: number;
  path: string;
  quality: number;
  width: number;
}

@Injectable({
  providedIn: 'root'
})
export class BackgroundImageService {
  imageInterface = {
    contentType: 'image/jpeg',
    file: '1532266037775_florian-pagano-692849-unsplash.jpg',
    folderId: 1531769511207,
    id: 1532266037775,
    sizes: [
      {
        height: 9999,
        path: '375_9999_100',
        quality: 1,
        width: 375
      },
      {
        height: 9999,
        path: '667_9999_100',
        quality: 1,
        width: 667
      }
    ]
  };

  private imageSubject = new Subject<BackgroundImage>();
  private currentImage: BackgroundImage = {};
  image = this.imageSubject.asObservable();


  constructor(private storage: AngularFireStorage,
              private db: AngularFireDatabase,
              private destinationService: DestinationService) {}

  getImageUrl(size, image): Observable<string|null> {
    return this.storage.ref(`flamelink/media/sized/${size}/${image}`).getDownloadURL();
  }

  getImageSet(id): Observable<ImageSet> {
    return this.db.object<ImageSet>(`flamelink/media/files/${id}`).valueChanges();
  }

  setBackground(id): void {
    if (this.currentImage.id === id) {
      return;
    }
    this.getImageSet(id).pipe(
      map(imageSet => imageSet.file),
      switchMap(imageUrl => this.getImageUrl('667_9999_100', imageUrl) )
    ).subscribe(url => {
      this.currentImage = {id, url};
      this.imageSubject.next(this.currentImage);
    });
  }

  setBackgroundByDestination(destination): void {
    this.destinationService.destinationDetails(destination).pipe(
      map(dest => dest.image)
    ).subscribe(id => {
      if (id && id.length > 0 ) {
        this.setBackground(id[0]);
      }
    });
  }
}
