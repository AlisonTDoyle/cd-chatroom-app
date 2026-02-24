import { Component, input } from '@angular/core';
import { Message } from '../../../interfaces/message';

@Component({
  selector: 'app-user-chat-bubble',
  imports: [],
  templateUrl: './user-chat-bubble.html',
  styleUrl: './user-chat-bubble.css',
})
export class UserChatBubble {
  message = input<Message>();
}
