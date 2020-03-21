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
export class DashboardComponent implements OnInit, OnDestroy {

  tagList = CATEGORY_LIST.slice(1);
  filterChangeSubscription: Subscription;
  allIdea: IdeaDetailModel[];
  ideasCounter = 0;

  constructor(public filterService: FilterService,
              private ideaService: IdeaManagementService,
              public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.onListenFilterChange();
    this.getAllIdea();
  }

  private getAllIdea() {
    this.ideaService.onGetAllIdea().subscribe((value: {projects: IdeaDetailModel[]}) => {
      this.allIdea = value.projects;
      this.ideasCounter = this.allIdea.length;
    }, error => {
      console.log(error);
    });
  }

  private onListenFilterChange() {
    this.filterChangeSubscription = this.filterService.filterChanged.subscribe((value: FilterValueModel) => {
      // console.log(value);
      this.tagList = CATEGORY_LIST.slice(1);
      if (value.category !== 0) {
        this.tagList = this.tagList.slice(value.category - 1, value.category);
      }
      // console.log(this.tagList);
      this.snackBar.open('filter search change', 'close', {duration: 3000});
    });
  }

  ngOnDestroy(): void {
    this.filterChangeSubscription.unsubscribe();
  }

}
