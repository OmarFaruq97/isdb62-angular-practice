import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  Users: User[] = [];


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.Users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  editUser(user: User) {
    this.router.navigate(['/create-user'], { state: { user } });
  }

  deleteUser(user: User) {
    if (confirm('Are you sure delete?')) {
      this.Users = this.Users.filter(u => u !== user);
      localStorage.setItem('users', JSON.stringify(this.Users));
    }
  }
}
