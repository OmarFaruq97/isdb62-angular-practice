import { User } from './../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
Users: User[] = [];
  

ngOnInit(): void {
    this.Users = JSON.parse(localStorage.getItem('users') || '[]');
}

}
