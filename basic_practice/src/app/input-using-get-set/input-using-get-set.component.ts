import { Component } from '@angular/core';

@Component({
  selector: 'app-input-using-get-set',
  imports: [],
  templateUrl: './input-using-get-set.component.html',
  styleUrl: './input-using-get-set.component.css'
})
export class InputUsingGetSetComponent {
  name="";
  displayName="";
  email="";
  getName(event: Event){
    this.name=(event.target as HTMLInputElement).value
    // console.log(event);    
  }
  setName(){
    this.name="sam"
  }
  showName(){
    this.displayName=this.name;
  }
  getEmail(val:string){
    console.log(val);
    
    this.email=val
  }
  setEmail(){
    this.email="default@gmail.com"
  }

}
