import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LottieModule } from 'ngx-lottie';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

export function playerFactory(): any {  
  return import('lottie-web');
}



@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),  
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
