import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDotLoadingComponent } from './three-dot-loading.component';

describe('ThreeDotLoadingComponent', () => {
  let component: ThreeDotLoadingComponent;
  let fixture: ComponentFixture<ThreeDotLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDotLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDotLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
