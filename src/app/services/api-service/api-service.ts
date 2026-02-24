import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Message } from '../../interfaces/message';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;
  private chatroomUrl: string = this.apiUrl + `/chatroom`;
  
  constructor(private httpClient: HttpClient) { }

  public sendMessage(message: string, chatroomId: number, senderId: number, imageUrl?: string) {
    let url = this.chatroomUrl + `/${chatroomId}`;
    
    const payload: Message = {
      senderId: senderId,
      message: message,
      image: null,
      timestamp: new Date()
    };

    return this.httpClient.post<any>(url, payload)
    .pipe(
        tap((data) => {
          return data;
        }));
    }
}
