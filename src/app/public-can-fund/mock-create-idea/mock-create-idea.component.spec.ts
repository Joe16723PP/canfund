import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCreateIdeaComponent } from './mock-create-idea.component';

describe('MockCreateIdeaComponent', () => {
  let component: MockCreateIdeaComponent;
  let fixture: ComponentFixture<MockCreateIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockCreateIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockCreateIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
