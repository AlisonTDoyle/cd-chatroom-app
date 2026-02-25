import { Component, Input } from '@angular/core';
import { Chatroom } from '../../../interfaces/chatroom';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-info',
  imports: [
    CommonModule
  ],
  templateUrl: './chat-info.html',
  styleUrl: './chat-info.css',
})
export class ChatInfo {
  @Input() chatroom?: Chatroom = undefined;
}
