import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MentorComponent } from './mentor.component';
import { MentorService } from './mentor.service';
import { CreateMentorComponent } from './create-mentor/create-mentor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MentorComponent,
    CreateMentorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    MentorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
