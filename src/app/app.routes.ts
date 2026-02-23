import { Routes } from '@angular/router';
import { Chatroom } from './routes/chatroom/chatroom';

export const routes: Routes = [
    {
        path: 'chat',
        component: Chatroom,
        canActivate: []
    }
];
