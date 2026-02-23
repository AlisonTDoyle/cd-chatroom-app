import { Component, input } from '@angular/core';

@Component({
  selector: 'app-other-chat-bubble',
  imports: [],
  templateUrl: './other-chat-bubble.html',
  styleUrl: './other-chat-bubble.css',
})
export class OtherChatBubble {
  message = input<{
      senderId:number,
      senderName: string,
      message: string,
      timestamp: Date,
      image: any
    }>();
}
