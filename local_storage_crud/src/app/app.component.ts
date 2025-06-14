import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'local_storage_crud';
}
export class User {
  name: string;
  age: number;
  phone: string;
  address: string;


  constructor (name: string, age: number, phone: string, address: string){
    this.name=name;
    this.age=age;
    this.phone=phone;
    this.address=address;

  }
}
