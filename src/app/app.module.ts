import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxCursorModule } from 'ngx-cursor';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule, NgxCursorModule, HttpClientModule, ReactiveFormsModule, FormsModule,
    AuthModule.forRoot({
      domain: 'dev-ubk5ycmjp74fm16r.us.auth0.com',
      clientId: 'rX71miI3jDv1USV33HJysi9PneU9hKF5'
    }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

