import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movie/most-popular',
    pathMatch: 'full',
  },
  {
    path: 'movie',
    redirectTo: 'movie/most-popular',
    pathMatch: 'full',
  },
  {
    path: 'movie/:type',
    component: HomeComponent,
  },
  {
    path: 'not-found',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
