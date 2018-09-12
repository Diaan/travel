import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeUrl'
})
export class SizeUrlPipe implements PipeTransform {

  transform(photo: any, size?: any): any {
    return photo.sizes.find(sizeObject => sizeObject.label === size).source;
  }

}
