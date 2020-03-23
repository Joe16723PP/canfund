import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CategoryModel} from '../../models/category.model';
import {IdeaManagementService} from '../../services/idea-management/idea-management.service';
import {IdeaDetailModel} from '../../models/idea.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-idea-group',
  templateUrl: './idea-group.component.html',
  styleUrls: ['./idea-group.component.scss']
})
export class IdeaGroupComponent implements OnInit, OnDestroy {
  // @Input() foundNumber: number;
  @Input() tagData: CategoryModel;
  ideaList: IdeaDetailModel[];
  isLoading = true;
  dataSubscription: Subscription;

  constructor(public ideaService: IdeaManagementService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getIdeaByTag(this.tagData.category_name);
  }

  private getIdeaByTag(tagName: string) {
    this.dataSubscription = this.ideaService.onGetIdeaByTag(tagName).subscribe((value: {projects: IdeaDetailModel[]}) => {
      this.isLoading = false;
      this.ideaList = value.projects;
    }, error => {
      this.isLoading = true;
      this.snackBar.open(error.message, 'close', {duration: 3000});
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
