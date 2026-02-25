import { Component, Input, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api-service/api-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-box.html',
  styleUrl: './message-box.css',
})
export class MessageBox {
  @Input() userId: number | null = null;

  private _chatroomId: number = -1;
  @Input()
  set chatroomId(value: number) {
    if (value !== this._chatroomId) {
      this._chatroomId = value;
    }
  }
  get chatroomId(): number {
    return this._chatroomId;
  }

  public enteredMessage: string = '';
  public sendingMessage: boolean = false;

  constructor(private apiService: ApiService, private zone: NgZone, private cdr: ChangeDetectorRef) {}

  public sendMessage() {
    this.sendingMessage = true;

    this.apiService.sendMessage(this.enteredMessage, this.chatroomId, this.userId!).subscribe({
      next: (data) => {
        this.sendingMessage = false;
        this.enteredMessage = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.zone.run(() => {
          console.error('Request failed:', err);
          this.sendingMessage = false;
        });
      }
    });
  }
}