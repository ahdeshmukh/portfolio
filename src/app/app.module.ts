import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ScrollToModule} from 'ng2-scroll-to';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
