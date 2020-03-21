import {AfterContentInit, AfterViewChecked, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IDEA_COLOR} from '../../data/const/card-color.data';
import {IdeaDetailModel} from '../../models/idea.model';
import {UserManagementService} from '../../../core/services/user-management/user-management.service';
import {UserModel} from '../../models/user.model';
import {Subscription} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {IdeaManagementService} from '../../services/idea-management/idea-management.service';
import {MOCK_IMAGE_LIST} from '../../data/const/mock-img.data';

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
  likeCount = 0;
  imgList: string[] = MOCK_IMAGE_LIST;
  imgPath: string;

  progressBarPrimaryColor = IDEA_COLOR.successState.primary;
  progressBarSecondaryColor = IDEA_COLOR.successState.accent;

  constructor(private userService: UserManagementService,
              public snackBar: MatSnackBar,
              public ideaService: IdeaManagementService) {
  }

  ngOnInit(): void {
    this.manageDescription();
    this.calcIdeaRate();
    this.randImg();
    this.ideaSubscription = this.userService.getUserDetailFromDatabase(this.ideaDetail.owner_id).subscribe((value: {user: UserModel}) => {
      this.userData = value.user;
      this.isLoading = false;
      this.clearObservable();
    }, error => {
      console.log(error);
      this.isLoading = true;
      this.clearObservable();
    });
  }

  onClickCard() {
    console.log('click');
  }

  ngOnDestroy(): void {
    this.clearObservable();
  }

  onClickReadMore() {
    this.isReadMore = !this.isReadMore;
  }

  onClickFavorite() {
    this.snackBar.open(`add ${this.ideaDetail.project_name} to favorite`, 'X', {duration: 1500});
  }

  onClickLikeAndDisLike(option: string) {
    const ideaId = this.ideaDetail.project_id;
    const userId = this.userData.uid;
    this.ideaService.onUserVoteIdea(ideaId, userId, option).subscribe(value => {
      console.log(value);
      this.snackBar.open(`you ${option} this idea`, 'X', {duration: 1500});
    }, error => {
      console.log(error);
    });
  }

  onClickTeamOrUser() {
    this.snackBar.open(`click owner idea ${this.userData.displayName}`, 'X', {duration: 1500});
  }

  private manageDescription() {
    if (this.ideaDetail.description.length < 200) {
      this.ideaDescription = this.ideaDetail.description;
      this.isHaveMoreDescription = false;
    } else {
      this.ideaDescription = this.ideaDetail.description.substr(0, 200);
      this.readMoreIdeaDes = this.ideaDetail.description.substr(200);
      this.isHaveMoreDescription = true;
    }
  }

  private calcIdeaRate() {
    const rand = Math.floor(Math.random() * 900);
    this.likeCount = this.ideaDetail.like.length + rand;
  }

  private randImg() {
    const rand = Math.floor(Math.random() * this.imgList.length);
    this.imgPath = this.imgList[rand];
  }

  private clearObservable() {
    this.ideaSubscription.unsubscribe();
  }
}
