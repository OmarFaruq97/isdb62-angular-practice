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
    private loginApiUrl = 'http://localhost:8080/api/auth/register';
  
    constructor(private http: HttpClient) { }
  
    registration(register: RegisterRequest ): Observable<any> {
      return this.http.post<any> (this.apiUrl,register);
    }
  
    login(login: LoginRequest): Observable<any>{
      return this.http.post<any>(this.loginApiUrl, login);
    }
}
