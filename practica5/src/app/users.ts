import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Users {
  users: Array<string> = ['Pilar(Anfitrión)'];

  constructor() { }

  addUser(user: string): void {
    this.users.push(user);
  }
  getUsers(): Array<string> {
    return this.users;
  }
}
