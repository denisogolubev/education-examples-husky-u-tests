import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicButtonComponent } from './basic-button.component';
import {MatButtonModule} from '@angular/material/button';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ChangeDetectorRef, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

/**
 * - f to start specific TC
 * - Declarations, imports, providers
 */

describe('BasicButtonComponent', () => {
  let component: BasicButtonComponent;
  let fixture: ComponentFixture<BasicButtonComponent>;
  let cdr: ChangeDetectorRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicButtonComponent],
      imports: [
        NoopAnimationsModule,
        MatButtonModule
      ]
    });

    fixture = TestBed.createComponent(BasicButtonComponent);
    component = fixture.componentInstance;
    cdr = fixture.debugElement.injector.get(ChangeDetectorRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Button text TC', () => {
    it('should check that button has default text', () => {
      const buttonEl: DebugElement = getDebugElement('.basic-button');
      expect(buttonEl.nativeElement.innerText)
        .withContext('Default text should be empty string')
        .toEqual('');
    });

    it('should check that button has specified text', () => {
      const mockText: string = 'Submit';
      component.text = mockText;
      cdr.detectChanges();
      const buttonEl: DebugElement = getDebugElement('.basic-button');
      expect(buttonEl.nativeElement.innerText)
        .withContext('Button text should be equal to passed one')
        .toEqual(mockText);
    });
  });

  it('should check that event was emitted after click', () => {
    const spy: jasmine.Spy = spyOn(component.clickTrigger, 'emit');
    const buttonEl: DebugElement = getDebugElement('.basic-button');
    buttonEl.nativeElement.click();

    expect(spy)
      .withContext('Click on button should emit an event')
      .toHaveBeenCalled();
  });

  const getDebugElement = (key: string): DebugElement => {
    return fixture.debugElement.query(By.css(key));
  };
});
