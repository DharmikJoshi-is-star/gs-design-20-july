import { TestBed, async } from '@angular/core/testing';
import { BreadcrumbService } from './breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('BreaadcrumbService', () => {
  let service: BreadcrumbService;
  let activatedRoute: ActivatedRoute;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        BreadcrumbService,
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useValue: router },
      ],
    });
    service = TestBed.inject(BreadcrumbService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get breadcrumbs', () => {
    service.breadcrumbs = [
      {
        label: 'Home',
        url: '/home',
      },
    ];
    expect(service.getBredcrumbs()).toBe(service.breadcrumbs);
  });

  it('should be get breadcrumbs', () => {
    const ar: ActivatedRoute = TestBed.get(ActivatedRoute);

    service.buildBreadCrumb(ar.root);
    expect(service.getBredcrumbs()).toBe(service.breadcrumbs);
  });
});
