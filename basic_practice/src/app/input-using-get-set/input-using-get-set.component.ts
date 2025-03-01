import { Component } from '@angular/core';

@Component({
  selector: 'app-input-using-get-set',
  imports: [],
  templateUrl: './input-using-get-set.component.html',
  styleUrl: './input-using-get-set.component.css'
})
export class InputUsingGetSetComponent {
  name="";
  diplayname="";
  email="";
  getName(event: Event){
    console.log(event);
    
  }
}
