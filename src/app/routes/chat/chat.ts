import { Component } from '@angular/core';
import { ChatList } from '../../components/chat/chat-list/chat-list';
import { Chatroom } from '../../components/chat/chatroom/chatroom';
import { ChatInfo } from '../../components/chat/chat-info/chat-info';

@Component({
  selector: 'app-chat',
  imports: [
    ChatList,
    Chatroom,
    ChatInfo
  ],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  userid: number = 0;
}
