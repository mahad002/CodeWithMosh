import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationTestingComponent } from './integration-testing.component';

describe('IntegrationTestingComponent', () => {
  let component: IntegrationTestingComponent;
  let fixture: ComponentFixture<IntegrationTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationTestingComponent]
    });
    fixture = TestBed.createComponent(IntegrationTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
