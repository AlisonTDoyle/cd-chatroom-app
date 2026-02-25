import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chatroom } from '../../../interfaces/chatroom';

@Component({
  selector: 'app-chat-list',
  imports: [CommonModule],
  templateUrl: './chat-list.html',
  styleUrls: ['./chat-list.css'],
  standalone: true // <- make sure this is true if using imports array
})
export class ChatList{
  @Input() chats: Chatroom[] = [];
  @Output() chatSelected = new EventEmitter<Chatroom>();

  constructor() { 
  }

  public chatClicked(chat: Chatroom) {
    this.chatSelected.emit(chat);
  }
}