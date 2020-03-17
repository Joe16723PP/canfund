import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareIdeaComponent } from './share-idea.component';

describe('ShareIdeaComponent', () => {
  let component: ShareIdeaComponent;
  let fixture: ComponentFixture<ShareIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
