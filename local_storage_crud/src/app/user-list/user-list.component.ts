<<<<<<< Updated upstream
import { User } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { state } from '@angular/animations';
>>>>>>> Stashed changes

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
<<<<<<< Updated upstream
export class UserListComponent implements OnInit {
Users: User[] = [];

constructor(private router: Router) {  
}  

ngOnInit(): void {
    this.Users = JSON.parse(localStorage.getItem('users') || '[]');
}
editUser(user: User){
  this.router.navigate(['/create-user'], {state:{User}});  
}

deleteUser(user: User){
  if (confirm('Are you sure delete?')) {
    this.Users = this.Users.filter(u=> u !==user);
    localStorage.setItem('user',JSON.stringify(this.Users))
  }
}
=======
export class UserListComponent implements OnInit{
  Users: User[]= [];
>>>>>>> Stashed changes

  constructor(private router: Router){

  }
  ngOnInit(): void {
      this.Users= JSON.parse(localStorage.getItem('users') ||'[]');
  }
  editUser(user:User){
    this.router.navigate(['/create-user'], {state:{user}});
  }
  deleteUser(user: User){
    if (confirm('Are you sure delete?')) {
      this.Users = this.Users.filter(u=> u !==user);
      localStorage.setItem('user',JSON.stringify(this.Users))
    }
  }
}

