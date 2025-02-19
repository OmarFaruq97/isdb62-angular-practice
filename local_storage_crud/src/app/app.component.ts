import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'local_storage_crud';
}
export class User{
  name: string;
  age:number;
  phone:string;
  address: string;

  constructor (name: string, age: number, phone: string, address: string){
    this.name="";
    this.age=0;
    this.phone="";
    this.address="";
  }
}
