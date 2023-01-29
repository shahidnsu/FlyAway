import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

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
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopupComponent } from './components/popup/popup.component';




export function playerFactory(): any {  
  return import('lottie-web');
}



@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LoginComponent,
    SelectDateAndPlacesComponent,
    NavbarComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),  
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,


    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
