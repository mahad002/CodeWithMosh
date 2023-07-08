import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableMainComponent } from './reusable-main.component';

describe('ReusableMainComponent', () => {
  let component: ReusableMainComponent;
  let fixture: ComponentFixture<ReusableMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusableMainComponent]
    });
    fixture = TestBed.createComponent(ReusableMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
