import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataMainComponent } from './display-data-main.component';

describe('DisplayDataMainComponent', () => {
  let component: DisplayDataMainComponent;
  let fixture: ComponentFixture<DisplayDataMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayDataMainComponent]
    });
    fixture = TestBed.createComponent(DisplayDataMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
