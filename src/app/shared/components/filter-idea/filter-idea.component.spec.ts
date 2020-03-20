import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterIdeaComponent } from './filter-idea.component';

describe('FilterIdeaComponent', () => {
  let component: FilterIdeaComponent;
  let fixture: ComponentFixture<FilterIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
