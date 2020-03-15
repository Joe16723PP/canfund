import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanFundComponent } from './can-fund.component';

describe('CanFundComponent', () => {
  let component: CanFundComponent;
  let fixture: ComponentFixture<CanFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
