import { Routes } from '@angular/router';
import { Chat } from './routes/chat/chat';
import { Login } from './routes/login/login';
import { PresignUpload } from './components/presign-upload/presign-upload';

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
    },
    {
        path: 'presign',
        component: PresignUpload,
        canActivate: []
    }
];
