import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PublicCanFundComponent} from './public-can-fund.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ShareIdeaComponent} from './share-idea/share-idea.component';

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
        path: 'share',
        component: ShareIdeaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicCanFundRoutingModule {}
