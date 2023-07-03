import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  template: `talks funciona!
  
  <!--{{title}}-->

  <p textContent="{{getAll()}}"></p>

  <p [textContent]="title" [style.color]="getColor()"></p>

  {{title}}
  
  `,
  styleUrls: ['./talks.component.css']
})
export class TalksComponent {

  title: string;

  getColor(){
    return 'red';
  }

  getAll(){
    
  }
  

  constructor(){

    this.title = 'Angular rocks!';

    setTimeout(() => this.title = 'Angular changes', 3000);



  }

  

  ngOnInit(){

  }

  

}
