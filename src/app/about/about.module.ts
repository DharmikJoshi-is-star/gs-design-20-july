import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutInfoComponent } from './about-info/about-info.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [AboutInfoComponent, AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
