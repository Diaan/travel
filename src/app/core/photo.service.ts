import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  // private apiUrl = 'https://api.flickr.com/services/rest/?api_key=c4f59d5decebd854cf973495271b8fe4&format=json&nojsoncallback=1';
  private apiUrl = 'https://api.flickr.com/services/rest/?api_key=e4af0dcdd9718b4d99fc407d7a7c3d27&format=json&nojsoncallback=1';

  constructor(private http: HttpClient) { }

  photos(day) {
    return this.http.get<any>(`${this.apiUrl}&method=flickr.photos.search&user_id=95498636%40N00&tags=japan2018day${day}`).pipe(
      map(result => result.photos)
    );
  }

  enrich(photo) {
    return this.http.get<any>(`${this.apiUrl}&method=flickr.photos.getSizes&photo_id=${photo.id}`).pipe(
      map(result => result.sizes)
    );
  }
}
