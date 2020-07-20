import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeComponent } from './home/home.component';
import { HomeTableComponent } from './home-table/home-table.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: HomeDashboardComponent,
        data: { breadcrumb: 'Dashboard' },
      },
      {
        path: 'showTable',
        component: HomeTableComponent,
        data: { breadcrumb: 'ShowTable' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
  constructor() {
    console.log('Home routing module');
  }
}
