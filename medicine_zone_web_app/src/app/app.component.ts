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
  title = 'medicine_zone_web_app';
}
export class Medicine {
  name: string;
  type: string;
  strength : string;
  company: string;
  packsize:string;
  price: number;
  sNumber: any;

  constructor(
    name: string,
    type: string,
    strength: string,
    company: string,
    packsize: string,
    price: number
  )    
    {
    this.name = name;
    this.type = type;
    this.strength = strength;
    this.company = company;
    this.packsize = packsize;
    this.price = price;
  }  
}