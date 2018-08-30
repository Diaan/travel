import { Pipe, PipeTransform } from '@angular/core';
import { DestinationService } from '@core/destination.service';

@Pipe({
  name: 'cityName'
})
export class CityNamePipe implements PipeTransform {

  constructor (
    private destinations: DestinationService
  ) {}

  transform(value: any, args?: any): any {
    return this.destinations.destinationName(value);
  }

}
