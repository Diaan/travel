import { Pipe, PipeTransform } from '@angular/core';
import { HighlightLocation } from '../core/destination.service';

@Pipe({
  name: 'mapsUrl'
})
export class MapsUrlPipe implements PipeTransform {

  transform(location: HighlightLocation, args?: any): any {
    let placeName = location.address; // .split(',')[0];
    placeName = placeName.replace(/\s/gi, '+');
    console.log(location.address, placeName);
    return `https://www.google.com/maps/search/${placeName}/@${location.lng},${location.lat}z`;
  }

}
