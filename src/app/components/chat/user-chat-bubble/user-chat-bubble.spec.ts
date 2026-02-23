import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatBubble } from './user-chat-bubble';

describe('UserChatBubble', () => {
  let component: UserChatBubble;
  let fixture: ComponentFixture<UserChatBubble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChatBubble]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChatBubble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
