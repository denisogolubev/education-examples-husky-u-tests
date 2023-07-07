import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicInputComponent} from './basic-input.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

describe('BasicInputComponent', () => {
  let component: BasicInputComponent;
  let fixture: ComponentFixture<BasicInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicInputComponent],
      imports: [
        NoopAnimationsModule,
        MatInputModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(BasicInputComponent);
    component = fixture.componentInstance;
    component.control = new FormControl<string>('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check that input change the form control value',  () => {
    const mockValue: string = 'Hello my friends';
    const inputEl: DebugElement = getDebugElement('#basic-input');
    // debugger
    inputEl.nativeElement.value = mockValue;
    inputEl.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    // debugger

    expect(component.control.value)
      .withContext('Form control value must be changed after user enter a value in the input')
      .toEqual(mockValue);
  });

  const getDebugElement = (key: string): DebugElement => {
    return fixture.debugElement.query(By.css(key));
  };
});
