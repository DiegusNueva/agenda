import { Component } from '@angular/core';

let variable = '1';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      ${variable}
      {{ title }}
    </h1>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: any;

  constructor() {

   
this.fun(undefined);
    
}

fun(x='defecto...'){
  
  console.log(x);
}
}