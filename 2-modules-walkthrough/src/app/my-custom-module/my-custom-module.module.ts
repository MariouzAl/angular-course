import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponentComponent } from './simple-component/simple-component.component';



@NgModule({
  declarations: [
    SimpleComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SimpleComponentComponent
  ]
})
export class MyCustomModuleModule { }
