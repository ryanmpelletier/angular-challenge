import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './map/map.module#MapModule'
  },
  {
    path: 'map',
    loadChildren: './map/map.module#MapModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
