import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-awesome-label',
  templateUrl: './my-awesome-label.component.html',
  styleUrls: ['./my-awesome-label.component.scss']
})
export class MyAwesomeLabelComponent implements OnInit,OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('MyAwesomeLabelComponent', 'ngOnChanges',changes );
  }
  ngOnDestroy(): void {
    console.log(' -MyAwesomeLabelComponent', 'ngOnDestroy' );
  }
  ngOnInit(): void {
    console.log(' -MyAwesomeLabelComponent', 'ngOnInit' );
  }
  @Input() label: number = 0;
}
