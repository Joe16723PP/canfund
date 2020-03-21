import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../shared/models/user.model';
import {AuthService} from '../../core/services/authService/auth.service';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.scss']
})
export class IdeaDetailComponent implements OnInit {

  public userData: UserModel;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userData = this.authService.UserValue;
  }
}
