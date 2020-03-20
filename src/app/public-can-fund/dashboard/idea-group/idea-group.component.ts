import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../../shared/models/category.model';
import {IdeaManagementService} from '../../../shared/services/idea-management/idea-management.service';
import {IdeaDetailModel} from '../../../shared/models/idea.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-idea-group',
  templateUrl: './idea-group.component.html',
  styleUrls: ['./idea-group.component.scss']
})
export class IdeaGroupComponent implements OnInit {
  @Input() tagData: CategoryModel;
  ideaList: IdeaDetailModel[];
  isLoading = true;

  constructor(public ideaService: IdeaManagementService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getIdeaByTag(this.tagData.category_name);
  }

  private getIdeaByTag(tagName: string) {
    this.ideaService.onGetIdeaByTag(tagName).then((value: IdeaDetailModel[]) => {
      console.log(value);
      this.isLoading = false;
      this.ideaList = value;
    }).catch(reason => {
      this.isLoading = true;
      this.snackBar.open(reason.message, 'close', {duration: 3000});
    });
  }

}
