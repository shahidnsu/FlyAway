import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSummaryComponent } from './components/flight-summary/flight-summary.component';
import { LoginComponent } from './components/login/login.component';


import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SearchFlightsPageComponent } from './pages/search-flights-page/search-flights-page.component';
import { SelectFlightsPageComponent } from './pages/select-flights-page/select-flights-page.component';
import { ConfirmFlightsPageComponent } from './pages/confirm-flights-page/confirm-flights-page.component';
import { ConfirmFlightsComponent } from './components/confirm-flights/confirm-flights.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PreviousFlightsPageComponent } from './pages/previous-flights-page/previous-flights-page.component';
import { UpcomingFlightsPageComponent } from './pages/upcoming-flights-page/upcoming-flights-page.component';

const routes: Routes = [
  
  {path: '', component: SplashScreenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search-flights', component: SearchFlightsPageComponent},
  {path: 'select-flights', component: SelectFlightsPageComponent},
  {path: 'flight-summary', component: FlightSummaryComponent},
  {path: 'confirm-flights', component: ConfirmFlightsPageComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'previous-flights', component: PreviousFlightsPageComponent},
  {path: 'upcoming-flights', component: UpcomingFlightsPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
