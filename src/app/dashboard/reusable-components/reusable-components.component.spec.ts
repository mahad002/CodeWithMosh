import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableComponentsComponent } from './reusable-components.component';

describe('ReusableComponentsComponent', () => {
  let component: ReusableComponentsComponent;
  let fixture: ComponentFixture<ReusableComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusableComponentsComponent]
    });
    fixture = TestBed.createComponent(ReusableComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
