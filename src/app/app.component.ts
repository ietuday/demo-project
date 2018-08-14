import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  times = 0;
  mouseClickMe(event){
    console.log(event.target.value);
    console.log(this.times);
    this.times++;
  }
}
