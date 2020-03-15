import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCanFundComponent } from './public-can-fund.component';

describe('PublicCanFundComponent', () => {
  let component: PublicCanFundComponent;
  let fixture: ComponentFixture<PublicCanFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCanFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCanFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
