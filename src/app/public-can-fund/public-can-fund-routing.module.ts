import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PublicCanFundComponent} from './public-can-fund.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PublicCanFundComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicCanFundRoutingModule {}
