import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'medicine_zone_web_app';
}
export class Medicine {
  name: string;
  strength: string;
  type: string;
  company: string;
  packsize: string;
  price: number;
  sNumber: number;

  constructor(
    name: string,
    strength: string,
    type: string,
    company: string,
    packsize: string,
    price: number,
    sNumber: number
  ) {
    this.name = name;
    this.strength = strength;
    this.type = type;
    this.company = company;
    this.packsize = packsize;
    this.price = price;
    this.sNumber = sNumber;
  }
}



