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
          BasicButtonComponent
        ],
        imports: [
          NoopAnimationsModule,
          MatInputModule,
          MatButtonModule,
          MatCardModule,
          MatIconModule,
          ReactiveFormsModule,
          HttpClientTestingModule
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
  //   // tick(10000);
  //   expect(component.title)
  //     .withContext('Title should be changed after 10 secs')
  //     .not
  //     .toBe('');
  // });

  it('should check timer in ngOnInit', fakeAsync(() => {
    component.ngOnInit();
    tick(31000);
    expect(component.title)
      .withContext('Title should be changed after 10 secs')
      .not
      .toBe('');
  }));
});
