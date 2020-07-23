import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInfoComponent } from './about-info.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AboutInfoComponent', () => {
  let component: AboutInfoComponent;
  let fixture: ComponentFixture<AboutInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutInfoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
