import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAwesomeLabelComponent } from './my-awesome-label/my-awesome-label.component';
import { MyAwesomeButtonComponent } from './my-awesome-button/my-awesome-button.component';
import { AwesomeCounterComponent } from './awesome-counter/awesome-counter.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { UnlessDirective } from './unless/unless.directive';



@NgModule({
  declarations: [
  
    MyAwesomeLabelComponent,
       MyAwesomeButtonComponent,
       AwesomeCounterComponent,
       HighlightDirective,
       UnlessDirective,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyAwesomeLabelComponent,
    MyAwesomeButtonComponent,
    AwesomeCounterComponent,
    HighlightDirective,
    UnlessDirective,
  ]
})
export class ComponentsUtilsModule { }
