import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireDemoComponent } from './fire-demo.component';

describe('FireDemoComponent', () => {
  let component: FireDemoComponent;
  let fixture: ComponentFixture<FireDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireDemoComponent]
    });
    fixture = TestBed.createComponent(FireDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
