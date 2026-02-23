import { Component } from '@angular/core';
import { UserChatBubble } from '../user-chat-bubble/user-chat-bubble';
import { CommonModule } from '@angular/common';
import { OtherChatBubble } from "../other-chat-bubble/other-chat-bubble";

@Component({
  selector: 'app-chatroom',
  imports: [
    UserChatBubble,
    CommonModule,
    OtherChatBubble
],
  templateUrl: './chatroom.html',
  styleUrl: './chatroom.css',
})
export class Chatroom {
  userId = 1; // Simulated current user ID
  chatMessages:any[] = [
    {
      senderId: 1,
      senderName: 'Alice',
      message: 'Hello, how are you?',
      timestamp: new Date(),
      image:null
    },
    {
      senderId: 2,
      senderName: 'Bob',
      message: 'I am good, thanks! How about you?',
      timestamp: new Date(),
      image:null
    },
    {
      senderId: 1,
      senderName: 'Alice',
      message: 'I am doing well, thank you!',
      timestamp: new Date(),
      image: {
        url: 'https://i.pinimg.com/736x/d2/b0/8f/d2b08f165a3ce1e23d594a3093db996c.jpg',
      }
    },
    {
      senderId: 2,
      senderName: 'Bob',
      message: 'Great to hear! What are you up to today?',
      timestamp: new Date(),
      image:null
    }
  ]
}
