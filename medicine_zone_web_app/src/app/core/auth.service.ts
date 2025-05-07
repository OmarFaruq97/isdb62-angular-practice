import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest, RegisterRequest} from '../model/model.class';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private apiUrl = 'http://localhost:8080/api/auth/register';
    private loginApiUrl = 'http://localhost:8080/api/auth/login';
  
    constructor(private http: HttpClient, private router: Router) { }
  
      // Registration method
    registration(register: RegisterRequest ): Observable<any> {
      return this.http.post<any> (this.apiUrl,register);
    }
  
      // Login method
    login(login: LoginRequest): Observable<any> {
      return this.http.post<any>(this.loginApiUrl, login); //  corrected endpoint
    }

    signUp(register: RegisterRequest): Observable<any>{
      return this.http.post<any>(`http://localhost:8080/api/auth/register`, register);
    }

    // Store token
  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  // Retrieve token
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
}
