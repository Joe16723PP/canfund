import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAllComponent } from './dashboard-all.component';

describe('DashboardAllComponent', () => {
  let component: DashboardAllComponent;
  let fixture: ComponentFixture<DashboardAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
