import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-list',
  imports: [
    CommonModule
  ],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})
export class ChatList {
  chats: any[] = [
    {
      id: 1,
      name: 'Chatroom 1',
      color: 'bg-blue-400'
    },
    {
      id: 2,
      name: 'Chatroom 2',
      color: 'bg-green-400'
    },
    {
      id: 3,
      name: 'Chatroom 3',
      color: 'bg-red-400'
    },
    {
      id: 4,
      name: 'Chatroom 4',
      color: 'bg-yellow-400'
    }
  ]
}
