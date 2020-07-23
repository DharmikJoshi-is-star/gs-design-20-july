import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../breadcrumb.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: BreadCrumb[] = [];
  public currentComponent: BreadCrumb = null;

  constructor(
    public activatedRoute: ActivatedRoute,
    public breadcrumbService: BreadcrumbService,
    public router: Router
  ) {
    if (router) {
      router.events.subscribe((e) => {
        this.updateBreadCrump(this.activatedRoute, this.breadcrumbService);
      });
    }
  }

  ngOnInit(): void {}

  updateBreadCrump(
    activatedRoute: ActivatedRoute,
    breadcrumbService: BreadcrumbService
  ): void {
    if (activatedRoute) {
      this.breadcrumbs = breadcrumbService.buildBreadCrumb(activatedRoute.root);

      //console.log(this.breadcrumbs);

      if (this.breadcrumbs.length >= 1) {
        this.currentComponent = this.breadcrumbs.pop();
      }

      // this.breadcrumbs.forEach((b) => {
      //   console.log(b.label, '--', b.url);
      // });
    }
  }
}
