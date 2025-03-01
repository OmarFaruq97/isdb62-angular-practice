import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-events',
  imports: [],
  templateUrl: './mouse-events.component.html',
  styleUrl: './mouse-events.component.css'
})
export class MouseEventsComponent {

  handleEvent(event:MouseEvent){
    console.log("Function Called", event.type);
    console.log("Function Called", event.target);
    console.log("Function Called", (event.target as Element).className);
  }

  

}
