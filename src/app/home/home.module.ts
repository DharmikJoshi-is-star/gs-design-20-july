import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeDashboardComponent, HomeTableComponent, HomeComponent],
  imports: [CommonModule, RouterModule, HomeRoutingModule],
})
export class HomeModule {
  constructor() {
    console.log('Home Module');
  }
}
