import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public-can-fund/public-can-fund.module').then(m => m.PublicCanFundModule)
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then((module) => module.ProfileModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
