import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundMainComponent } from './fund-main.component';

describe('FundMainComponent', () => {
  let component: FundMainComponent;
  let fixture: ComponentFixture<FundMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundMainComponent]
    });
    fixture = TestBed.createComponent(FundMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
