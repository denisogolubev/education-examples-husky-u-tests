import {DefaultDateFormatPipe} from './default-date-format.pipe';
import {TestBed} from '@angular/core/testing';
import {DatePipe} from '@angular/common';

describe('DefaultDateFormatPipe', () => {
  // const defaultDateFormatPipe: DefaultDateFormatPipe = new DefaultDateFormatPipe(TestBed.inject(DatePipe));
  let defaultDateFormatPipe: DefaultDateFormatPipe;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DefaultDateFormatPipe
      ],
      providers: [
        DatePipe
      ]
    });

    defaultDateFormatPipe = new DefaultDateFormatPipe(TestBed.inject(DatePipe));
  });

  describe('Given user auth and B2B role', () => {
    describe('When user requested data from BE', () => {
      it('then kill neighbour', () => {
        expect('').toBe('');
      });
    });
  });

  it('should check that date transformed correctly', () => {
    const mockDate: string = 'Fri Jul 14 2023 11:12:24 GMT+0300 (Eastern European Summer Time)';
    const transformedDate: string = defaultDateFormatPipe.transform(mockDate);
    expect(transformedDate).toBe('Friday 14.07.2023');
  });
});
