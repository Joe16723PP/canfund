import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PublicCanFundComponent} from './public-can-fund.component';
import {ShareIdeaComponent} from './share-idea/share-idea.component';
import {MockCreateIdeaComponent} from './mock-create-idea/mock-create-idea.component';
import {ForTestComponent} from './for-test/for-test.component';
import {IdeaDetailComponent} from './idea-detail/idea-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SearchComponent} from './search/search.component';
import {UserMessageComponent} from './user-message/user-message.component';

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
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'share',
        component: ShareIdeaComponent
      },
      {
        path: 'message',
        component: UserMessageComponent
      },
      {
        path: 'mock-add',
        component: MockCreateIdeaComponent
      },
      {
        path: 'for-test',
        component: ForTestComponent
      },
      {
        path: 'idea',
        component: IdeaDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicCanFundRoutingModule {}
