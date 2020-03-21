import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAllComponent } from './dashboard-all/dashboard-all.component';
import { DashboardTagComponent } from './dashboard-tag/dashboard-tag.component';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';
import {HttpClientModule} from '@angular/common/http';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {PublicCanFundModule} from '../public-can-fund.module';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {IdeaGroupComponent} from './idea-group/idea-group.component';
import {SharedModule} from '../../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [DashboardAllComponent, DashboardTagComponent, DashboardSearchComponent, IdeaGroupComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    DashboardRoutingModule,
    PublicCanFundModule,
    MatDividerModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    SharedModule,
    MatProgressSpinnerModule,
  ]
})
export class DashboardModule { }
