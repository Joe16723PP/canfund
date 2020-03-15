import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() drawer: MatDrawer;
  @ViewChild(MatMenuTrigger, {static: true}) trigger: MatMenuTrigger;
  navbarTitle = 'CanFund';
  constructor() { }

  ngOnInit() {
  }

}
