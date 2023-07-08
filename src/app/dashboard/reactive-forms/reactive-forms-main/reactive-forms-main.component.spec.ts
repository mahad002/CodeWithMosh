import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsMainComponent } from './reactive-forms-main.component';

describe('ReactiveFormsMainComponent', () => {
  let component: ReactiveFormsMainComponent;
  let fixture: ComponentFixture<ReactiveFormsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormsMainComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
