import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFollowersComponent } from './my-followers.component';

describe('MyFollowersComponent', () => {
  let component: MyFollowersComponent;
  let fixture: ComponentFixture<MyFollowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFollowersComponent]
    });
    fixture = TestBed.createComponent(MyFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
