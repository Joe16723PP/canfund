import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RoutingModel} from '../shared/models/routing.model';
import {ROUTING_LIST} from '../core/data/const/routing.data';

@Component({
  selector: 'app-public-can-fund',
  templateUrl: './public-can-fund.component.html',
  styleUrls: ['./public-can-fund.component.scss']
})
export class PublicCanFundComponent implements OnInit {
  isHaveBg = false;
  navLinks: RoutingModel[] = ROUTING_LIST;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // if (this.router.url === '/home') {
    //   this.isHaveBg = true;
    // }
  }

}
