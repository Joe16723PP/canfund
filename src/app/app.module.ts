import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {PublicCanFundModule} from './public-can-fund/public-can-fund.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FlexLayoutModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      SharedModule,
      CoreModule,
      PublicCanFundModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatDividerModule,
      MatButtonModule,
      MatCheckboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
