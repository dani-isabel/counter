import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter:number = 0;

  ngOnInit() {
    console.log('Inicio');
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
