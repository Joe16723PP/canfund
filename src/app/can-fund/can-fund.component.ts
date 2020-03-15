import { Component, OnInit } from '@angular/core';
import {MENU_LIST} from '../core/data/const/menu.data';
import {MenuModel} from '../shared/models/menu.model';

@Component({
  selector: 'app-can-fund',
  templateUrl: './can-fund.component.html',
  styleUrls: ['./can-fund.component.scss']
})
export class CanFundComponent implements OnInit {
  menuList: MenuModel[] = MENU_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
