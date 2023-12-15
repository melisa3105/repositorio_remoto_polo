import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoDuracion',
})
export class FormatoDuracionPipe implements PipeTransform {
  transform(duracion: number): string {
    if (duracion === 1) {
      return '1 h';
    } else {
      return duracion + ' hs';
    }
  }
}
