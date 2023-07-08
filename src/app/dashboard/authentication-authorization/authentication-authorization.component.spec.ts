import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationAuthorizationComponent } from './authentication-authorization.component';

describe('AuthenticationAuthorizationComponent', () => {
  let component: AuthenticationAuthorizationComponent;
  let fixture: ComponentFixture<AuthenticationAuthorizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationAuthorizationComponent]
    });
    fixture = TestBed.createComponent(AuthenticationAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
