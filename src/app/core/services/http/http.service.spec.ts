import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpService} from './http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';

describe('HttpService', () => {
  let httpService: HttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ]
      }
    );

    httpService = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should check that http request successed', () => {
    const mockResponse: {message: string} = {
      message: 'Here can be your real response'
    };
    spyOn(httpService, 'send').and.returnValue(of(mockResponse));
    httpService.send<{message: string}>('testUrl').subscribe({
      next: (response) => {
        expect(response)
          .withContext('Should have the mockResponse value')
          .toEqual(mockResponse);

        // expect(response)
        //   .withContext('message')
        //   .toEqual({
        //     message: 'Some other text to compare'
        //   });
      }
    });
  });

  it('should check that http request failed', (done: DoneFn) => {
    const errorResponse: HttpErrorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });
    const message: string = 'Here can be any message';

    httpService.send('testUrl').subscribe({
      next: () => done.fail('expected an error'),
      error: (error: HttpErrorResponse)  => {
        expect(error.status)
          .withContext(`status should equal to ${errorResponse.status}`)
          .toEqual(404);
        expect(error.error)
          .withContext(`message should equal to ${message}`)
          .toEqual(message);
        done();
      }
    });

    const req = httpTestingController.expectOne('testUrl');
    req.flush(message, errorResponse);
  });
});
