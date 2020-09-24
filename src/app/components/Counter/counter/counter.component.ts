import { Component, OnInit, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counterParent:number;
  @Input() currentValues: number[] = [];
  @Input() previousValues: number[] = [];
  
  constructor() {}

  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
    console.log(this.counterParent);
    this.currentValues.push(this.counterParent);
    this.previousValues.push(this.counterParent);
  }
  ngOnInit(): void {
  }

}


