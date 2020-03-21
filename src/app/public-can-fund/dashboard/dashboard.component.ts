import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterService} from '../../shared/services/filter/filter.service';
import {Subscription} from 'rxjs';
import {IdeaManagementService} from '../../shared/services/idea-management/idea-management.service';
import {IdeaDetailModel} from '../../shared/models/idea.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CATEGORY_LIST} from '../../shared/data/const/menus.data';
import {FilterValueModel} from '../../shared/models/filter-value.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
