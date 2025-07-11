import { User } from './../app.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent {
  user: User = new User('', 0, '', '');
  isUpdate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav?.extras.state['user']) {
      this.user = nav.extras.state['user'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {}

  // JSON.parse bring data
  onSubmit() {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    //here phone number is primary key not editable
    if (this.isUpdate) {
      users = users.map(
        (user) => (user.phone === this.user.phone ? this.user : user) 
      );
    } else {
      users.push(this.user);
    }

    //  JSON.stringify make to String
    localStorage.setItem('users', JSON.stringify(users));

    // for empty form as previous
    this.user = new User('', 0, '', '');
    // alert('New user create successfully');
    this.router.navigate(['/user-list']);
  }
}
