import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 't3pg-awesome-counter',
  templateUrl: './awesome-counter.component.html',
  styleUrls: ['./awesome-counter.component.scss']
})
export class AwesomeCounterComponent implements OnInit, OnDestroy, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('AwesomeCounterComponent', 'ngOnChanges', changes);
  }
  ngOnDestroy(): void {
    console.log('AwesomeCounterComponent', 'ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('AwesomeCounterComponent', 'ngOnInit');
  }
  counter: number = 0;
  increaseCounter() {
    this.updateCounter(this.counter+1);
  }
 
  decreaseCounter() {
    this.updateCounter(this.counter-1);
  }
  resetCounter() {
    this.updateCounter(0);
  }
  updateCounter(value: number) {
    this.counter=value;
    this.color=this.getColorByCounterValue(value)
  }
  color: string = 'yellow'

  getColorByCounterValue(counter: number): string {
    if (counter === 0) return "yellow"
    return counter % 2 === 0 ? 'red' : 'blue'
  }
}
