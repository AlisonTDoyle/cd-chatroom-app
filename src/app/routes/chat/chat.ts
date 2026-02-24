import { Component } from '@angular/core';
import { ChatList } from '../../components/chat/chat-list/chat-list';
import { Chatroom } from '../../components/chat/chatroom/chatroom';
import { ChatInfo } from '../../components/chat/chat-info/chat-info';
import { MessageBox } from "../../components/chat/message-box/message-box";
import { Auth } from '../../services/auth/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [
    ChatList,
    Chatroom,
    ChatInfo,
    MessageBox,
    CommonModule
],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  constructor(public authService: Auth) {}

  userid: number = 0;
}
