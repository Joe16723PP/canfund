import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicCanFundComponent } from './public-can-fund.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {TagGroupComponent} from './home/tag-group/tag-group.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {PublicCanFundRoutingModule} from './public-can-fund-routing.module';
import {AuthService} from '../core/services/authService/auth.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    PublicCanFundComponent,
    LoginComponent,
    HomeComponent,
    TagGroupComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CoreModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    PublicCanFundRoutingModule,
    AngularFireAuthModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [AuthService]
})
export class PublicCanFundModule { }