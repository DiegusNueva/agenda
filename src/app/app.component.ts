import { Component } from '@angular/core';

let variable = '1';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{ talk.title }}
    </h1>

    <app-talks></app-talks>


  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
    
    talk;

  constructor() {

      this.talk = {title: 'Rx'};

  }

}

interface Talk{
  title: string;
}
