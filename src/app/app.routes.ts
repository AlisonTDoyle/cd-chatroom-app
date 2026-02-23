import { Routes } from '@angular/router';
import { Chat } from './routes/chat/chat';

export const routes: Routes = [
    {
        path: 'chat',
        component: Chat,
        canActivate: []
    }
];
