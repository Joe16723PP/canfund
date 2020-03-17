import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-public-can-fund',
  templateUrl: './public-can-fund.component.html',
  styleUrls: ['./public-can-fund.component.scss']
})
export class PublicCanFundComponent implements OnInit {
  isHaveBg = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // if (this.router.url === '/home') {
    //   this.isHaveBg = true;
    // }
  }

}
