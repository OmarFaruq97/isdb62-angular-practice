import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css',
})
export class IfElseComponent {
  hideSee = true;
  color = false;
  multiColor =4;
  

  hide() {
    this.hideSee = false;
  }
  see() {
    this.hideSee = true;
  }
  hideSeee() {
    this.hideSee = !this.hideSee;
  }

  colorChange() {
    this.color = !this.color;
  }
  
  handleColor(val:number){
    this.multiColor=val;
  }
  inputHandle(event : Event){
    this.multiColor = parseInt((event.target as HTMLInputElement).value)
  }
}
