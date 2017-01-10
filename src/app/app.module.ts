import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppSignupComponent } from './app-signup/app-signup.component';
import { AppHomeComponent } from './app-home/app-home.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AppSignupComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
