import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAwesomeLabelComponent } from './my-awesome-label/my-awesome-label.component';
import { MyAwesomeButtonComponent } from './my-awesome-button/my-awesome-button.component';
import { AwesomeCounterComponent } from './awesome-counter/awesome-counter.component';



@NgModule({
  declarations: [
  
    MyAwesomeLabelComponent,
       MyAwesomeButtonComponent,
       AwesomeCounterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyAwesomeLabelComponent,
    MyAwesomeButtonComponent,
    AwesomeCounterComponent,
  ]
})
export class ComponentsUtilsModule { }
