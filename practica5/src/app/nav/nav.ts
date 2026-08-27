import { Component, OnInit } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {

  usersNumber: number = 1;

  constructor(private userService: Users) { }

  ngOnInit(): void {
    this.userService.getUsersNumber()
                    .subscribe({
                      next: data => this.usersNumber = data.usersNumber
                    })
  }
}
