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
  
}

export class Product {
  name: string;
  price: number;
  quantity: number;
  purchaseDate: Date;
  sellDate: Date;
  buyer: string;
  seller: string;
  sNumber: number;

  constructor(
    name: string,
    price: number,
    quantity: number,
    purchaseDate: Date,
    sellDate: Date,
    buyer: string,
    seller: string,
    sNumber: number
  ) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.purchaseDate = purchaseDate;
    this.sellDate = sellDate;
    this.buyer = buyer;
    this.seller = seller;
    this.sNumber = sNumber;
  }
}
