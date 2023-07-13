import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { NewComp2Component } from './new-comp2/new-comp2.component';
import { InputCompComponent } from './input-comp/input-comp.component';
import { NewComp3Component } from './new-comp3/new-comp3.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    NewComp2Component,
    InputCompComponent,
    NewComp3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
