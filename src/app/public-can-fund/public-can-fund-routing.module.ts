import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PublicCanFundComponent} from './public-can-fund.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ShareIdeaComponent} from './share-idea/share-idea.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MockCreateIdeaComponent} from './mock-create-idea/mock-create-idea.component';

const routes: Routes = [
  {
    path: '',
    component: PublicCanFundComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'dashboard'
    },
      {
        path: 'dashboard',
        component: DashboardComponent
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
      },
      {
        path: 'mock-add',
        component: MockCreateIdeaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicCanFundRoutingModule {}
