import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSummaryComponent } from './components/flight-summary/flight-summary.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileInputComponent } from './components/profile-input/profile-input.component';
import { SelectDateAndPlacesComponent } from './components/select-date-and-places/select-date-and-places.component';
import { SelectFlightsComponent } from './components/select-flights/select-flights.component';
import { SignupComponent } from './components/signup/signup.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { TestLoginComponent } from './components/test-login/test-login.component';

const routes: Routes = [


  { path: 'profile', component: ProfileInputComponent },

  { path: '', component: SplashScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'select', component: SelectDateAndPlacesComponent },
  { path: 'select-flights', component: SelectFlightsComponent },
  { path: 'flight-summary', component: FlightSummaryComponent },
  {path:   'test',component:TestLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
