import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingEventComponent } from './displaying-event.component';

describe('DisplayingEventComponent', () => {
  let component: DisplayingEventComponent;
  let fixture: ComponentFixture<DisplayingEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayingEventComponent]
    });
    fixture = TestBed.createComponent(DisplayingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
