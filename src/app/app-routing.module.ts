import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './public-can-fund/login/login.component';
import {HomeComponent} from './public-can-fund/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public-can-fund/public-can-fund.module').then(m => m.PublicCanFundModule)
  },
  // {
  //   path: 'app',
  //   loadChildren: () => import('./can-fund/can-fund.module').then(m => m.CanFundModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
