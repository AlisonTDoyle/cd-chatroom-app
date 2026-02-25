import { Component, computed, signal, OnInit } from '@angular/core';
import { ChatList } from '../../components/chat/chat-list/chat-list';
import { Chatroom } from '../../components/chat/chatroom/chatroom';
import { ChatInfo } from '../../components/chat/chat-info/chat-info';
import { MessageBox } from "../../components/chat/message-box/message-box";
import { Auth } from '../../services/auth/auth';
import { Chatroom as ChatroomModel } from './../../interfaces/chatroom';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api-service/api-service';

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
  styleUrls: ['./chat.css'], // <-- fixed typo 'styleUrl' -> 'styleUrls'
})
export class Chat implements OnInit {
  public userId = computed(() => this.authService.currentUserId());
  public chatrooms = signal<ChatroomModel[]>([]);
  public selectedChatroom?:ChatroomModel = undefined;

  constructor(public authService: Auth, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.loadChatrooms();
  }

  private loadChatrooms() {
    const id = this.authService.currentUserId();
    if (!id) return;

    this.apiService.getUserChatrooms(id).subscribe((data) => {
      this.chatrooms.set(data); // update the signal
    });
  }
}