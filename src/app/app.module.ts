import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MentorComponent } from './mentor.component';
import { MentorService } from './mentor.service';

@NgModule({
  declarations: [
    AppComponent,
    MentorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MentorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
