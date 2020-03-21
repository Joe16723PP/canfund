import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTagComponent } from './dashboard-tag.component';

describe('DashboardTagComponent', () => {
  let component: DashboardTagComponent;
  let fixture: ComponentFixture<DashboardTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
