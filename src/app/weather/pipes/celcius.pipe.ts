import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celcius'
})
export class CelciusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let celcius = Math.round(parseFloat(value)-273.15);
    return celcius;
  }

}
