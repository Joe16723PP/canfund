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
  ideaDescription: string;
  readMoreIdeaDes: string;
  isHaveMoreDescription = false;
  isReadMore = false;

  progressBarPrimaryColor = IDEA_COLOR.successState.primary;
  progressBarSecondaryColor = IDEA_COLOR.successState.accent;

  constructor(private userService: UserManagementService) {
  }

  ngOnInit(): void {
    // console.log(this.txt2.length);
    if (this.ideaDetail.description.length < 124) {
      this.ideaDescription = this.ideaDetail.description;
      this.isHaveMoreDescription = false;
    } else {
      this.ideaDescription = this.ideaDetail.description.substr(0, 124);
      this.readMoreIdeaDes = this.ideaDetail.description.substr(124);
      this.isHaveMoreDescription = true;
    }
    this.ideaSubscription = this.userService.getUserDetailFromDatabase(this.ideaDetail.owner_id).subscribe((value: {user: UserModel}) => {
      this.userData = value.user;
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = true;
    });
  }

  onClickCard() {
    console.log('click');
  }

  ngOnDestroy(): void {
    this.ideaSubscription.unsubscribe();
  }

  onClickReadMore() {
    this.isReadMore = !this.isReadMore;
  }
}
