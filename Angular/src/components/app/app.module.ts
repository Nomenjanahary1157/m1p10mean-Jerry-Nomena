import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 

import { LoginComponent } from '../login/login.component'; 
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, 
    AppRoutingModule 
  ],
  providers: [
  ],
})
export class AppModule { }
