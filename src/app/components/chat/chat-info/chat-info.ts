import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chatroom } from '../../../interfaces/chatroom';
import { CommonModule } from '@angular/common';
import { Message } from '../../../interfaces/message';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api-service/api-service';

@Component({
  selector: 'app-chat-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './chat-info.html',
  styleUrls: ['./chat-info.css'], // corrected 'styleUrl' to 'styleUrls'
})
export class ChatInfo implements OnChanges {
  @Input() chatroom?: Chatroom = undefined;
  messages: Message[] = [];
  selectedUserId?: number

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chatroom'] && this.chatroom) {
      this.messages = [];
    }
  }

  public getSenderMessages() {
  this.apiService.readChatroomMessagesFromUser(this.chatroom!.id, this.selectedUserId!).subscribe({
    next: (messages) => {
      this.messages = messages;
      this.cdr.markForCheck();  // ensures UI updates
    },
    error: (err) => {
      console.error('Error fetching messages:', err);
    }
  });
}
}