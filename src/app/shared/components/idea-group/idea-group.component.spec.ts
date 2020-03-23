import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaGroupComponent } from './idea-group.component';

describe('IdeaGroupComponent', () => {
  let component: IdeaGroupComponent;
  let fixture: ComponentFixture<IdeaGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
