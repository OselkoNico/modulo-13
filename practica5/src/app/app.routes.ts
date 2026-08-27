import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChatRoom } from './chat-room/chat-room';

export const routes: Routes = [
    {path: '', component: ChatRoom}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
