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
import { FilterIdeaComponent } from './components/filter-idea/filter-idea.component';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FooterComponent } from './components/footer/footer.component';
import { ThreeDotLoadingComponent } from './components/idea-card/three-dot-loading/three-dot-loading.component';


@NgModule({
  declarations: [NavbarComponent, IdeaCardComponent, FilterIdeaComponent, FooterComponent, ThreeDotLoadingComponent],
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
    NgCircleProgressModule.forRoot(),
    MatSelectModule,
    MatAutocompleteModule,
    MatTooltipModule
  ],
    exports: [
        NavbarComponent,
        IdeaCardComponent,
        FilterIdeaComponent,
        FooterComponent
    ],
})

export class SharedModule { }
