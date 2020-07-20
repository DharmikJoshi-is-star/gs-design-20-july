import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerralaBreadcrumbModule } from './serrala-breadcrumb/serrala-breadcrumb.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: { breadcrumb: 'Home' },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
    data: { breadcrumb: 'About' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
