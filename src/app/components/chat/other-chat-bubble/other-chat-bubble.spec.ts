import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherChatBubble } from './other-chat-bubble';

describe('OtherChatBubble', () => {
  let component: OtherChatBubble;
  let fixture: ComponentFixture<OtherChatBubble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherChatBubble]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherChatBubble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
