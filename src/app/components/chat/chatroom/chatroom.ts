import { Component, OnInit, NgZone } from '@angular/core';
import { UserChatBubble } from '../user-chat-bubble/user-chat-bubble';
import { CommonModule } from '@angular/common';
import { OtherChatBubble } from "../other-chat-bubble/other-chat-bubble";
import { ApiService } from '../../../services/api-service/api-service';
import { Message } from '../../../interfaces/message';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chatroom',
  imports: [UserChatBubble, CommonModule, OtherChatBubble],
  templateUrl: './chatroom.html',
  styleUrls: ['./chatroom.css'],
})
export class Chatroom implements OnInit {
  userId = 1;
  chatMessages: Message[] = [];
  chatMessages$: Observable<Message[]> | undefined;

  constructor(private apiService: ApiService, private zone: NgZone) { }

  ngOnInit() {
    this.chatMessages$ = this.apiService.readChatroomMessages(1);
  }

  readChatroomMessages(chatroomId: number) {
    this.apiService.readChatroomMessages(chatroomId).subscribe(
      (response) => {
        this.zone.run(() => {
          this.chatMessages = response || [];
        });
      }
    );
  }
}
