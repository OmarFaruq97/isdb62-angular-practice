import { Component } from '@angular/core';
import { DataTableComponent } from './table/data-table/data-table.component';
import { TabelArrayComponent } from './table/table-array/tabel-array.component';

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
    
  <textarea name="input" id="input"></textarea>
  <button (click)=onSubmit()>save!</button>
  <p>{{ output }}</p>

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


