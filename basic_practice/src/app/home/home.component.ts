import { TeacherService } from './../services/teacher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  str: String = '';

  constructor(private TeacherService:  TeacherService) { }

  ngOnInit() {
    this.TeacherService.callLocalApi().subscribe(data =>{
      console.log(data);
      this.str = data;
      
    });      
  }
}
