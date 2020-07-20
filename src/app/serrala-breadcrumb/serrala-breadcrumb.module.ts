import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerralaBreadcrumbRoutingModule } from './serrala-breadcrumb-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbService } from 'angular-crumbs';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, SerralaBreadcrumbRoutingModule],

  exports: [BreadcrumbComponent],
})
export class SerralaBreadcrumbModule {}
