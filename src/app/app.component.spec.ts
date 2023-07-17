import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BasicInputComponent} from './components/basic-input/basic-input.component';
import {BasicButtonComponent} from './components/basic-button/basic-button.component';
import {HttpService} from './core/services/http/http.service';
import {DefaultDateFormatPipe} from './core/pipes/default-date-format/default-date-format.pipe';
import {DatePipe} from '@angular/common';
import {Test123Component} from './components/test123/test123.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        // schemas: [CUSTOM_ELEMENTS_SCHEMA],
        // schemas: [NO_ERRORS_SCHEMA],
        declarations: [
          AppComponent,
          BasicInputComponent,
          BasicButtonComponent,
          DefaultDateFormatPipe,
          Test123Component
        ],
        imports: [
          NoopAnimationsModule,
          MatInputModule,
          MatButtonModule,
          MatCardModule,
          MatIconModule,
          ReactiveFormsModule,
          HttpClientTestingModule
        ],
        providers: [
          DatePipe
        ]
      }
    );

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpService = fixture.debugElement.injector.get(HttpService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create', () => {
  //   component.ngOnInit();
  //   tick(10000);
  //   expect(component.title)
  //     .withContext('Title should be changed after 10 secs')
  //     .not
  //     .toBe('');
  // });

  it('should check timer in ngOnInit', fakeAsync(() => {
    component.ngOnInit();
    tick(10000);
    expect(component.title)
      .withContext('Title should be changed after 10 secs')
      .not
      .toBe('');
  }));
});
