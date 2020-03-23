import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile.component';

const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
export class ProfileRoutingModule {
}
