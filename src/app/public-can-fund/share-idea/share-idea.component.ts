import { Component, OnInit } from '@angular/core';
import {UserManagementService} from '../../core/services/user-management/user-management.service';
import {AuthService} from '../../core/services/authService/auth.service';
import {UserModel} from '../../shared/models/user.model';

@Component({
  selector: 'app-share-idea',
  templateUrl: './share-idea.component.html',
  styleUrls: ['./share-idea.component.scss']
})
export class ShareIdeaComponent implements OnInit {

  public userData: UserModel;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userData = this.authService.UserValue;
  }

}
