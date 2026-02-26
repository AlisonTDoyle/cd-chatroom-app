import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Message } from '../../interfaces/message';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs';
import { Chatroom } from './../../interfaces/chatroom';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;
  private chatroomUrl: string = this.apiUrl + `/chatroom`;

  constructor(private httpClient: HttpClient) {
  }

  private getPresignUrl(userId: number, file: File) {
    const url = `${this.apiUrl}/user/${userId}/presign`;

    const payload = {
      "userId": userId.toString(),
      "filename": file.name,
      "contentType": file.type
    };

    return this.httpClient.post<S3UploadResponse>(url, payload)
      .pipe(
        tap((data) => data)
      );
  }

  public sendMessage(message: string, chatroomId: number, senderId: number, image?: File) {
    // Check if image needs to be uploaded first and upload image
    let imageUrl: string | null = null;
    if (image) {
      this.getPresignUrl(senderId, image).subscribe((res) => {
        console.log('Received presign URL:', res);
      });

      // Upload image
    }

    let url = this.chatroomUrl + `/${chatroomId}`;

    const payload: Message = {
      senderId: senderId,
      message: message,
      image: null,
      timestamp: new Date()
    };

    console.log('Sending message:', payload);

    return this.httpClient.post<any>(url, payload)
      .pipe(
        tap((data) => {
          return data;
        }));
  }

  public readChatroomMessages(chatroomId: number) {
    let url = this.chatroomUrl + `/${chatroomId}`;

    return this.httpClient.get<Message[]>(url).pipe(
      tap((data) => {
        return data;
      })
    )
  }

  public readChatroomMessagesFromUser(chatroomId:number, userId: number) {
    let url = this.chatroomUrl + `/${chatroomId}?senderId=${userId}`;

    return this.httpClient.get<Message[]>(url).pipe(
      tap((data) => {
        return data;
      })
    )
  }

  public getUserChatrooms(userId: number) {
    let url = this.apiUrl + `/user/${userId}/chatroom`;

    return this.httpClient.get<Chatroom[]>(url).pipe(
      tap((data) => {
        return data;
      })
    )
  }
}
