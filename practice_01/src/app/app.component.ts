import { Component } from '@angular/core';
import { DataTableComponent } from './table/data-table/data-table.component';
import { TabelArrayComponent } from './table/table-array/tabel-array.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [DataTableComponent,TabelArrayComponent,HeaderComponent,FooterComponent,ContentComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <div class="container">
    <app-header></app-header>
    <app-content></app-content>
    <app-data-table></app-data-table>
    <app-tabel-array></app-tabel-array>
    <app-footer></app-footer>
  </div>
=======
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [DataTableComponent, TabelArrayComponent, RouterOutlet, HeaderComponent, FooterComponent,NavbarComponent],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  // template: `
  // <app-data-table></app-data-table>
  // <app-tabel-array></app-tabel-array>

  // `
  template:
  `
  // <h1>Hello {{ title }}</h1>
  // <img [src]="imgSrc" [alt]="altImg" />
  // <button (mouseover)="showAlert()">Click me</button>
  // <input (click)="onKeyUp($event)" placeholder="Write here" />
  // <p>{{ keyPressed }}</p>  
  <p>---------------------------------------------</p>
  <textarea name="input" id="input"></textarea>
  <button (click)=onSubmit()>save!</button>
  <p>{{ output }}</p>
>>>>>>> 21639e5e4d266785d97b4c9cd87c5c9d5d07527c
  `
})
export class AppComponent {
  title = 'AnGuLaR';
  altImg ='';
  imgsrc='';
  keyPressed= 'Hello'

  output = '';
  onSubmit() {
    let input = document.getElementById('input') as HTMLTextAreaElement;
    this.output = input.value;
  }
}


