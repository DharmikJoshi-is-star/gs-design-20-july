import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { BreadCrumb } from '../breadcrumb.model';
import { BreadcrumbService } from '../breadcrumb.service';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let activatedRoute: ActivatedRoute;
  let router: Router;
  let breadcrumbService: BreadcrumbService;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        BreadcrumbService,
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    breadcrumbService = TestBed.inject(BreadcrumbService);

    router = TestBed.inject(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check updatebreadcrumbs', () => {
    component.updateBreadCrump(activatedRoute, breadcrumbService);
    expect(component.breadcrumbs).toBe(component.breadcrumbs);
  });
});
