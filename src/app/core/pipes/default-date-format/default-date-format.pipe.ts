import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'defaultDateFormat'
})
export class DefaultDateFormatPipe implements PipeTransform {
  constructor(
    private datePipe: DatePipe
  ) {
  }
  transform(value: Date | string): string {
    return this.datePipe.transform(value, 'EEEE dd.MM.yyyy') || '';
  }
}
