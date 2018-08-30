import { Pipe, PipeTransform } from '@angular/core';
import { HighlightLocation } from '@core/destination.service';

@Pipe({
  name: 'mapsUrl'
})
export class MapsUrlPipe implements PipeTransform {

  transform(location: HighlightLocation, args?: any): any {
    const placeName = location.address.replace(/\s/gi, '+');
    return `https://www.google.com/maps/search/${placeName}/@${location.lng},${location.lat}z`;
  }

}
