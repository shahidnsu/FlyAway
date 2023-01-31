import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSummaryComponent } from './components/flight-summary/flight-summary.component';
import { LoginComponent } from './components/login/login.component';


import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SearchFlightsPageComponent } from './pages/search-flights-page/search-flights-page.component';
import { SelectFlightsPageComponent } from './pages/select-flights-page/select-flights-page.component';
import { TestLoginComponent } from './components/test-login/test-login.component';

const routes: Routes = [
  {path:'test',component:TestLoginComponent},
  {path: '', component: SplashScreenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search-flights', component: SearchFlightsPageComponent},
  {path: 'select-flights', component: SelectFlightsPageComponent},
  {path: 'flight-summary', component: FlightSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
