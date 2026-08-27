import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private users: Array<string> = ['Pilar(Anfitrión)'];
  private countUserSubject = new Subject();

  constructor() { }

  addUser(data: any): void {
    this.users.push(data.user);
    this.countUserSubject.next({usersNumber: this.users.length});
  }

  getUsers(): Array<string> {
    return this.users;
  }

  getUsersNumber(): Observable<any> {
    return this.countUserSubject.asObservable()
  }
}
