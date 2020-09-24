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
    let change = changes['counterParent'];
    this.currentValues.push(change.currentValue);
    this.previousValues.push(change.previousValue);
  }
  ngOnInit(): void {
  }

}


