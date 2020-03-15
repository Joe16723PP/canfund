import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-group',
  templateUrl: './tag-group.component.html',
  styleUrls: ['./tag-group.component.scss']
})
export class TagGroupComponent implements OnInit {
  tagList: string[] = ['#game', '#movie', '#food', '#photo'];

  constructor() { }

  ngOnInit(): void {
  }

}
