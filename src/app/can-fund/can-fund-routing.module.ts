import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {CanFundComponent} from './can-fund.component';


const routes: Routes = [
  {
    path: '',
    component: CanFundComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'app'
    },
    {
      path: 'app',
      component: HomeComponent
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CanFundRoutingModule {
}
