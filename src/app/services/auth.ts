import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  currentUserId = signal<number | null>(null);

  setUser(id: number) {
    this.currentUserId.set(id);
  }

}
