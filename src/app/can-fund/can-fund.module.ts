import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { CanFundComponent } from './can-fund.component';
import {CanFundRoutingModule} from './can-fund-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, CanFundComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    CanFundRoutingModule,
  ],
})
export class CanFundModule { }
