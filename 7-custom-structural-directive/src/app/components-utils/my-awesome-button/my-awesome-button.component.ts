import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 't3pg-my-awesome-button',
  templateUrl: './my-awesome-button.component.html',
  styleUrls: ['./my-awesome-button.component.scss']
})
export class MyAwesomeButtonComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('MyAwesomeButtonComponent', 'constructor')

  }
  ngOnDestroy(): void {
    console.log(' -MyAwesomeButtonComponent', 'ngOnDestroy');
  }
  ngOnInit(): void {
    console.log(' -MyAwesomeButtonComponent', 'ngOnInit');
  }
  @Input() label: string = '';
  @Input() isDisabled: boolean = false;
  @Output() clicked: EventEmitter<void> = new EventEmitter()
  clickHandler() {
    this.clicked.emit()
  }

}
