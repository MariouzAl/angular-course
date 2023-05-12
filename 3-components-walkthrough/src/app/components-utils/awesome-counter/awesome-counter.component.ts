import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 't3pg-awesome-counter',
  templateUrl: './awesome-counter.component.html',
  styleUrls: ['./awesome-counter.component.scss']
})
export class AwesomeCounterComponent implements OnInit,OnDestroy, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('AwesomeCounterComponent', 'ngOnChanges',changes );
  }
  ngOnDestroy(): void {
    console.log('AwesomeCounterComponent', 'ngOnDestroy' );
  }
  ngOnInit(): void {
    console.log('AwesomeCounterComponent', 'ngOnInit' );
  }
  counter:number=0;
  increaseCounter(){
    this.counter++;
  }
  decreaseCounter(){
    this.counter--;
  }
  resetCounter(){
    this.counter=0;
  }
}
