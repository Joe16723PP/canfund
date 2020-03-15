import {Component, Input, OnInit} from '@angular/core';
import {MenuModel} from '../../models/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() menus: MenuModel[];
  sideBarTitle = 'Menu';
  constructor() { }

  ngOnInit() {
  }

}
