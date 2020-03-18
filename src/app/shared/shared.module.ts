import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import { IdeaCardComponent } from './components/idea-card/idea-card.component';
import {MatCardModule} from '@angular/material/card';
import {NgCircleProgressModule} from 'ng-circle-progress';


@NgModule({
  declarations: [NavbarComponent, IdeaCardComponent],
    imports: [
      CommonModule,
      MatSidenavModule,
      MatProgressSpinnerModule,
      FlexLayoutModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatListModule,
      RouterModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatBadgeModule,
      MatCardModule,
      NgCircleProgressModule.forRoot({
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: '#78C000',
        innerStrokeColor: '#C7E596',
        animationDuration: 300,
      })
    ],
  exports: [
    NavbarComponent,
    IdeaCardComponent
  ],
})

export class SharedModule { }
