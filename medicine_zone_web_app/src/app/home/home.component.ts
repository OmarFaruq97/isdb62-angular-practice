import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  email = '';
  password = '';

  constructor(
    private auth : AuthService,
    private router: Router
  ){}

  onLogin() {
    this.auth.login({
      email: this.email,
      password: this.password
      
    })
      .subscribe({
        next: (res) => {
          this.auth.setToken(res.access_token);
          this.router.navigate(['/add-med']); // Adjust route if needed
        },
        error: (error) => {
          alert('Invalid credentials');
          console.error(error);
        }
      });
  }
}
