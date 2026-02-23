import { Routes } from '@angular/router';
import { Chat } from './routes/chat/chat';
import { Login } from './routes/login/login';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login,
        canActivate: []
    },
    {
        path: 'chat',
        component: Chat,
        canActivate: []
    }
];
