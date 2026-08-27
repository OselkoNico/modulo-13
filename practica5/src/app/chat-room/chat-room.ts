import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Users } from '../users';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.css',
})
export class ChatRoom implements OnInit {
  users: Array<string> = [];
  form: FormGroup = new FormGroup({});

  constructor(private userService: Users) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.form = new FormGroup({
      user: new FormControl('')
    })
  }
  addUser() {
    this.userService.addUser(this.form.value);
    this.form.reset();
  }
}
