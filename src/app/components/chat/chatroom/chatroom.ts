import { Component, Input, NgZone } from '@angular/core';
import { UserChatBubble } from '../user-chat-bubble/user-chat-bubble';
import { CommonModule } from '@angular/common';
import { OtherChatBubble } from "../other-chat-bubble/other-chat-bubble";
import { ApiService } from '../../../services/api-service/api-service';
import { Message } from '../../../interfaces/message';

@Component({
  selector: 'app-chatroom',
  imports: [UserChatBubble, CommonModule, OtherChatBubble],
  templateUrl: './chatroom.html',
  styleUrls: ['./chatroom.css'],
})
export class Chatroom {
  @Input() userId: number | null = null;

  private _chatroomId: number = -1;
  @Input()
  set chatroomId(value: number) {
    if (value !== this._chatroomId) {
      this._chatroomId = value;
      this.loadMessages(); // refetch whenever chatroomId changes
    }
  }
  get chatroomId(): number {
    return this._chatroomId;
  }

  chatMessages: Message[] = [];

  constructor(private apiService: ApiService, private zone: NgZone) { }

  private loadMessages() {
    if (this._chatroomId === -1) return;

    this.apiService.readChatroomMessages(this._chatroomId).subscribe(
      (messages) => {
        this.zone.run(() => {
          this.chatMessages = messages || [];
        });
      }
    );
  }
}