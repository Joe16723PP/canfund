import { Component, OnInit } from '@angular/core';
import {RoutingModel} from '../../models/routing.model';
import {ROUTING_LIST} from '../../../core/data/const/routing.data';
import {UserModel} from '../../models/user.model';
import {AuthService} from '../../../core/services/authService/auth.service';

@Component({
  selector: 'app-tab-link',
  templateUrl: './tab-link.component.html',
  styleUrls: ['./tab-link.component.scss']
})
export class TabLinkComponent implements OnInit {
  navLinks: RoutingModel[] = ROUTING_LIST;
  userData: UserModel;
  isLoginUser = false;
  constructor(public authService: AuthService) {
    if (this.authService.UserValue !== null) {
      this.userData = this.authService.UserValue;
      this.isLoginUser = true;
    }
  }

  ngOnInit(): void {
  }

}
