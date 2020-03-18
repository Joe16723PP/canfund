import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {MatDrawer} from '@angular/material/sidenav';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../core/services/authService/auth.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() drawer: MatDrawer;
  @ViewChild(MatMenuTrigger, {static: true}) trigger: MatMenuTrigger;
  navbarTitle = 'CanFund';
  searchGroup: FormGroup;
  isLoginUser = false;
  userData: UserModel;
  constructor(public authService: AuthService) {
    // console.log(this.authService.UserValue);
    if (this.authService.UserValue !== null) {
      this.userData = this.authService.UserValue;
      console.log(this.userData);
      this.isLoginUser = true;
    }
  }

  ngOnInit() {
    this.searchGroup = new FormGroup({
      keyword: new FormControl(null)
    });
  }

  onSearch() {
    console.log(this.searchGroup.value);
  }

  onLogout() {
    this.authService.onLogout();
  }
}
