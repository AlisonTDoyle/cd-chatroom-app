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
  public presignUrl: string = '';
  public sendingMessage: boolean = false;
  public selectedFile: File | null = null;
  public sendingFile: boolean = false;

  constructor(private apiService: ApiService, private zone: NgZone, private cdr: ChangeDetectorRef) { }

  public sendMessage() {
    this.sendingMessage = true;

    this.apiService.sendMessage(this.enteredMessage, this.chatroomId, this.userId!, this.selectedFile || undefined).subscribe({
      next: (data: any) => {
        this.sendingMessage = false;
        this.enteredMessage = '';
        this.selectedFile = null;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        this.zone.run(() => {
          console.error('Request failed:', err);
          this.sendingMessage = false;
        });
      }
    });
  }

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile);
    }
  }
}