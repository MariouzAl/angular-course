import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsUtilsModule } from './components-utils/components-utils.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
