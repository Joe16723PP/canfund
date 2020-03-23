import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermPrivacyDetailComponent } from './term-privacy-detail.component';

describe('TermPrivacyDetailComponent', () => {
  let component: TermPrivacyDetailComponent;
  let fixture: ComponentFixture<TermPrivacyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermPrivacyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermPrivacyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
