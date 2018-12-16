import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(!value)
      return null;
    let limit: number = args ? parseInt(args) : 50;
    return value.length < limit ? value : value.substring(0, limit);
  }
}
