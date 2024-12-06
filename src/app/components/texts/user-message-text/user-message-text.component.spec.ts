import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageTextComponent } from './user-message-text.component';

describe('UserMessageTextComponent', () => {
  let component: UserMessageTextComponent;
  let fixture: ComponentFixture<UserMessageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMessageTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMessageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
