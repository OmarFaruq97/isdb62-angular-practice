import { state } from '@angular/animations';
import { User } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< Updated upstream
import { Router } from '@angular/router';

=======
import { User } from '../app.component';
import { Router } from '@angular/router';
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
<<<<<<< Updated upstream
<<<<<<< Updated upstream
export class CreateUserComponent{
  user:User = new User('', 0,'','');
  isUpdate = false;

  constructor(private router: Router){
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav?.extras.state['user']) {
      this.isUpdate = true;
    }
  }

  // ngOnInit(): void {        
  // }
  onSubmit(){
    let users: User[]= JSON.parse(localStorage.getItem('users') || '[]');

    if(this.isUpdate){
      users = users.map(user => (user.phone == this.user.phone? this.user : user))
    }else{
      users.push(this.user)
    }
    users.push(this.user);

    localStorage.setItem('users',JSON.stringify(users));

    this.user = new User ('',0,'','');   
    // alert('New user create successfully');
=======
export class CreateUserComponent {
  user: User = new User('', 0, '', '');
  isUpdate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav?.extras.state['user']) {
      this.isUpdate = true;
    }
  }
  onSubmit(){
    let users: User[]=JSON.parse(localStorage.getItem('users') || '[]');
    if(this.isUpdate){
      users = users.map(user => (this.user.phone == this.user.phone? this.user : this.user))
    }else{
      users.push(this.user)
    }
    // users.push (this.user);

    this.user = new User('', 0,'','');

>>>>>>> Stashed changes
=======
export class CreateUserComponent {
  user: User = new User('', 0, '', '');
  isUpdate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav?.extras.state['user']) {
      this.isUpdate = true;
    }
  }
  onSubmit(){
    let users: User[]=JSON.parse(localStorage.getItem('users') || '[]');
    if(this.isUpdate){
      users = users.map(user => (this.user.phone == this.user.phone? this.user : this.user))
    }else{
      users.push(this.user)
    }
    // users.push (this.user);

    this.user = new User('', 0,'','');

>>>>>>> Stashed changes
    this.router.navigate(['/user-list'])
  }
}
