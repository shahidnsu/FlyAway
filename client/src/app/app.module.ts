import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { LottieModule } from 'ngx-lottie';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LoginComponent } from './components/login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SelectDateAndPlacesComponent } from './components/select-date-and-places/select-date-and-places.component';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PopupComponent } from './components/popup/popup.component';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SelectFlightsComponent } from './components/select-flights/select-flights.component';

import { MatDividerModule } from '@angular/material/divider';
import { FlightSummaryComponent } from './components/flight-summary/flight-summary.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpInterceptor,
} from '@angular/common/http';

import { InputFieldComponent } from './components/input-field/input-field.component';
import { SignupComponent } from './components/signup/signup.component';
import { SelectSummaryComponent } from './components/select-summary/select-summary.component';

import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { SelectFlightsPageComponent } from './pages/select-flights-page/select-flights-page.component';
import { SearchFlightsPageComponent } from './pages/search-flights-page/search-flights-page.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ProfileComponent } from './components/profile/profile.component';
import { ConfirmFlightsComponent } from './components/confirm-flights/confirm-flights.component';
import { ConfirmFlightsPageComponent } from './pages/confirm-flights-page/confirm-flights-page.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { PreviousFlightsPageComponent } from './pages/previous-flights-page/previous-flights-page.component';
import { UpcomingFlightsPageComponent } from './pages/upcoming-flights-page/upcoming-flights-page.component';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { TripHistoryComponent } from './pages/trip-history/trip-history.component';
import { SingleTripComponent } from './pages/single-trip/single-trip.component';
import {NgxStripeModule} from 'ngx-stripe';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessPageComponent } from './pages/success-page/success-page.component';
//import {HttpClientModule} from '@angular/common/http'

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
    PopupComponent,
    SelectFlightsComponent,
    InputFieldComponent,
    SignupComponent,
    FlightSummaryComponent,
    SelectSummaryComponent,

        SelectFlightsPageComponent,
        SearchFlightsPageComponent,
        ProfileComponent,
        ConfirmFlightsComponent,
        ConfirmFlightsPageComponent,
        PaymentComponent,
        BackButtonComponent,
        PreviousFlightsPageComponent,
        UpcomingFlightsPageComponent,
        TripHistoryComponent,
        SingleTripComponent,
        SuccessPageComponent,

    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        NgxStripeModule.forRoot('pk_test_51MWLP4CtRfbKEF0FQNdWE4BiKjKOekTvMmkR4WBsBQdOFpKftVrcXRsTArFdXHuH4c6M2qcYx1CY4Ur3Cs4PzUYQ00ntT6NrTJ'),
        MatToolbarModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        LottieModule.forRoot({ player: playerFactory }),
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatSelectModule,
        MatMenuModule,
        MatStepperModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        MatDialogModule

    ],
    providers: [MatDatepickerModule, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [AppComponent]

})
export class AppModule {}
