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
import {MatInputModule} from '@angular/material/input';
import { SelectDateAndPlacesComponent } from './components/select-date-and-places/select-date-and-places.component';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';



export function playerFactory(): any {  
  return import('lottie-web');
}



@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LoginComponent,
    SelectDateAndPlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),  
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
