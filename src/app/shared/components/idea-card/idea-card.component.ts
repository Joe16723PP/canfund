import {Component, Input, OnInit} from '@angular/core';
import {IDEA_COLOR} from '../../data/const/card-color.data';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.scss']
})
export class IdeaCardComponent implements OnInit {
  @Input() cardDetail: any;

  progressBarPrimaryColor = IDEA_COLOR.successState.primary;
  progressBarSecondaryColor = IDEA_COLOR.successState.accent;

  constructor() { }

  ngOnInit(): void {
  }

  onClickCard() {
    console.log('click');
  }
}
