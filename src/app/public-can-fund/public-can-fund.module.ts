import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicCanFundComponent } from './public-can-fund.component';
import {LoginComponent} from '../login/login.component';
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
import { SignUpComponent } from '../sign-up/sign-up.component';
import {NgxCaptchaModule} from 'ngx-captcha';
import { ShareIdeaComponent } from './share-idea/share-idea.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {CKEditorModule} from 'ckeditor4-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MockCreateIdeaComponent } from './mock-create-idea/mock-create-idea.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ForTestComponent } from './for-test/for-test.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchComponent } from './search/search.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserMessageComponent } from './user-message/user-message.component';



@NgModule({
  declarations: [
    PublicCanFundComponent,
    LoginComponent,
    SignUpComponent,
    ShareIdeaComponent,
    DashboardComponent,
    MockCreateIdeaComponent,
    ForTestComponent,
    IdeaDetailComponent,
    SearchComponent,
    UserMessageComponent,
  ],
  imports: [
    HttpClientModule,
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
    MatIconModule,
    NgxCaptchaModule,
    MatSelectModule,
    CKEditorModule,
    MatStepperModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatToolbarModule,
  ],
  providers: [AuthService]
})
export class PublicCanFundModule { }
