import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterRequest } from '../../../model/model.class';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

 

  confirmPassword: string = '';
  register: RegisterRequest = new RegisterRequest('','','','','','PHARMACIST');


  constructor(private auth: AuthService, private router: Router){}


  onSubmit() {
    
    this.auth.signUp(this.register).subscribe({
      next: (res) => {
        console.log('User registered successfully:', res);
        this.router.navigate(['/home']); // Navigate after success
      },
      error: (err) => {
        console.error('Registration failed:', err);
      }
    });
  }
}

