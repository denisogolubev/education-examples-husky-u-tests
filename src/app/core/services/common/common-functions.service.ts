import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CommonFunctions {
  public static sum(a: number, b: number): number {
    return a + b;
  }

  public static concat(a: string, b: string): string {
    return a + b;
  }

  public static callFunctionByName<T, R>(name: string, ...args: T[]): R {
    if (typeof this[name] === 'function') {
      return this[name](...args) as R;
    }

    throw new Error('Could not find ' + name + ' math function');
  }
}
