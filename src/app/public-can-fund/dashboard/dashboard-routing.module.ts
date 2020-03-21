import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardAllComponent} from './dashboard-all/dashboard-all.component';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'ideas'
    },
      {
        path: 'ideas',
        component: DashboardAllComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })

export class DashboardRoutingModule {}
