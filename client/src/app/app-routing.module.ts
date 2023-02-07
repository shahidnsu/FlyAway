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

import { AuthGuard } from './shared/auth.guard';
import { TripHistoryComponent } from './pages/trip-history/trip-history.component';
import { SingleTripComponent } from './pages/single-trip/single-trip.component';

import { SuccessPageComponent } from './pages/success-page/success-page.component';
const routes: Routes = [

  {path: '', component: SplashScreenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]},
  {path: 'search-flights', component: SearchFlightsPageComponent,canActivate : [AuthGuard]},
  {path: 'select-flights', component: SelectFlightsPageComponent,canActivate:[AuthGuard]},

  {path: 'flight-summary', component: FlightSummaryComponent, canActivate :[AuthGuard]},
  {path: 'confirm-flights', component: ConfirmFlightsPageComponent, canActivate : [AuthGuard]},
  {path: 'payment', component: PaymentComponent, canActivate: [AuthGuard]},
  {path: 'trip-history', component: TripHistoryComponent,canActivate: [AuthGuard]},
  {path: 'trip', component: SingleTripComponent,canActivate: [AuthGuard]},
  {path:'success', component:SuccessPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
