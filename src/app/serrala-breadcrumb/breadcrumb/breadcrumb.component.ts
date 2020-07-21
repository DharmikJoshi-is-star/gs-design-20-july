import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../breadcrumb.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoBreadCrumbService } from '../breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: BreadCrumb[];
  public currentComponent: BreadCrumb;
  constructor(
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: DemoBreadCrumbService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      this.updateBreadCrump();
    });
  }

  updateBreadCrump() {
    this.breadcrumbs = this.breadcrumbService.buildBreadCrumb(
      this.activatedRoute.root
    );

    if (this.breadcrumbs.length >= 1) {
      this.currentComponent = this.breadcrumbs.pop();
    }

    console.log('My data: ' + this.breadcrumbs);
    this.breadcrumbs.forEach((b) => {
      console.log(b.label, '--', b.url);
    });
  }
}
