import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-chat-bubble',
  imports: [],
  templateUrl: './user-chat-bubble.html',
  styleUrl: './user-chat-bubble.css',
})
export class UserChatBubble {
  message = input<{
      senderId:number,
      senderName: string,
      message: string,
      timestamp: Date,
      image: any
    }>();
}
