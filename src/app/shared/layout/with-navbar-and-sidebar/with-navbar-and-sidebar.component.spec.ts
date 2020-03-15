import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithNavbarAndSidebarComponent } from './with-navbar-and-sidebar.component';

describe('WithNavbarAndSidebarComponent', () => {
  let component: WithNavbarAndSidebarComponent;
  let fixture: ComponentFixture<WithNavbarAndSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithNavbarAndSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithNavbarAndSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
