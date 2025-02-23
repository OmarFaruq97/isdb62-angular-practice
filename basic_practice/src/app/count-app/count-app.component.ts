import { Component } from '@angular/core';

@Component({
  selector: 'app-count-app',
  imports: [],
  templateUrl: './count-app.component.html',
  styleUrl: './count-app.component.css',
})
export class CountAppComponent {
  count = 0;

  handleIncrement() {
    this.count = this.count + 1;
  }
  handleDecrement() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }
  }
  handleReset() {
    this.count = 0;
  }

  handleCounter(value: string) {
    if (value == 'plus') {
      this.count = this.count + 1;
    } else if (value == 'minus') {
      if(this.count>0){
        this.count = this.count-1
      }
    } else if (value == 'reset') {
      this.count = 0;
    }
  }
}
