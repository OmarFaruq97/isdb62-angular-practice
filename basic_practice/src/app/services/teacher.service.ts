
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../teacher/teacher.component';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  apiUrl = 'http://192.168.0.219:8080/teachers';
  localApiUrl = 'http://localhost:8083/info';  

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  addTeacher(teacher : Teacher) : Observable<Teacher>{
    return this.http.post<Teacher>(this.apiUrl, teacher);
  }

  updateTeacher(teacher: Teacher): Observable<Teacher> {
    // return this.http.put<Teacher>(`${this.apiUrl}/${teacher.id}`, teacher);
    return this.http.put<Teacher>(this.apiUrl + '/' + teacher.id, teacher);
  }

  deleteTeacher(id: number) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  callLocalApi(): Observable<string>{
    let params : HttpParams= new HttpParams();
    params = params.append ('my_Name', 'Omar');
    //params = params.append ('fatherName', 'Yousuf');
    params = params.append ('age', 29);
    return this.http.get(this.localApiUrl, { params: params, responseType: 'text'});
  }
}