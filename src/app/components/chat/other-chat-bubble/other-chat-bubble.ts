import { Component, input } from '@angular/core';
import { Message } from '../../../interfaces/message';

@Component({
  selector: 'app-other-chat-bubble',
  imports: [],
  templateUrl: './other-chat-bubble.html',
  styleUrl: './other-chat-bubble.css',
})
export class OtherChatBubble {
  message = input<Message>();
}
