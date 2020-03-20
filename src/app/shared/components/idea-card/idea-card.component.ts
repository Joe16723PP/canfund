import {AfterContentInit, AfterViewChecked, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IDEA_COLOR} from '../../data/const/card-color.data';
import {IdeaDetailModel} from '../../models/idea.model';
import {UserManagementService} from '../../../core/services/user-management/user-management.service';
import {UserModel} from '../../models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.scss']
})
export class IdeaCardComponent implements OnInit, OnDestroy {
  @Input() ideaDetail: IdeaDetailModel;

  userData: UserModel;
  isLoading = true;
  ideaSubscription: Subscription;

  progressBarPrimaryColor = IDEA_COLOR.successState.primary;
  progressBarSecondaryColor = IDEA_COLOR.successState.accent;

  constructor(private userService: UserManagementService) {
  }

  ngOnInit(): void {
    this.ideaSubscription = this.userService.getUserDetailFromDatabase(this.ideaDetail.owner_id).subscribe((value: {user: UserModel}) => {
      this.userData = value.user;
      // console.log(this.userData);
      this.isLoading = false;
    }, error => {
      console.log(error);
      // this.userData = null;
      this.isLoading = true;
    });
  }

  onClickCard() {
    console.log('click');
  }

  ngOnDestroy(): void {
    this.ideaSubscription.unsubscribe();
  }
}
