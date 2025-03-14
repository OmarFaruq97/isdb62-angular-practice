import { Component } from '@angular/core';

@Component({
  selector: 'app-input-using-get-set',
  imports: [],
  templateUrl: './input-using-get-set.component.html',
  styleUrl: './input-using-get-set.component.css',
})
export class InputUsingGetSetComponent {
  name = '';
  email = '';
  contact = 0;
  isNeg : boolean =false;
  displayName = '';
  
  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
    // console.log(event);
  }
  showName (){
    this.displayName=this.name;
  }
  setName (){
    this.name = "Default Name";
  }
  getcontact(num: number){
    if(num<0){
      this.isNeg = true;
      this.contact = 0;
    }else{
      this.isNeg = false;
      this.contact = num
    }    
  }
  getEmail (val: string){
    console.log(val);
    this.email=val;    
  }
  setEmail(){
    this.email="example@email.com"
  }
  
}
