import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test123Component } from './test123.component';

describe('Test123Component', () => {
  let component: Test123Component;
  let fixture: ComponentFixture<Test123Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Test123Component],
      imports: [],
      providers: []
    });
    fixture = TestBed.createComponent(Test123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
