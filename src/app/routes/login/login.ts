import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  @Output() loggedInUser = new EventEmitter<number>();

  users: { id: number, name: string }[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]

  selectedUserId: number | null = null;

  constructor(private authService: Auth, private router: Router) { }

  login() {
    if (this.selectedUserId) {
      this.authService.setUser(this.selectedUserId);
    }

    this.router.navigate(['/chat']);
  }
}
