// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router'; 
// import { LoginComponent } from '../login/login.component'; 
// import { DragdropComponent } from '../dragdrop/dragdrop.component'; 
// import { AppComponent } from './app.component';

// // import { AppRoutingModule } from './app-routing.module';
// import { DragDropModule} from '@angular/cdk/drag-drop';
// // import { routes } from './app-routing.module';
// // import {CdkDrag} from '@angular/cdk/drag-drop';
// import routes from './app-routing.module';
// @NgModule({
//   declarations: [
//     LoginComponent,
//     DragdropComponent,
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot(routes), 
//     // AppRoutingModule,
//     DragDropModule,
//     // CdkDrag
//   ],
//   providers: [
//   ],
//   bootstrap: [AppComponent]

// })
// export class AppModule { }




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from '../login/login.component'; 

// import { HomeComponent } from './components/home/home.component';
// import { AboutComponent } from './components/about/about.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

import { appRoutes } from './app-routing.module';
import { GestionServiceComponent } from '../gestion-service/gestion-service.component';
import { ReservationComponent } from '../reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GestionServiceComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }