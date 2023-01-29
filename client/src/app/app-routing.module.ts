import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SelectDateAndPlacesComponent } from './components/select-date-and-places/select-date-and-places.component';
import { SelectFlightsComponent } from './components/select-flights/select-flights.component';
import { SignupComponent } from './components/signup/signup.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

const routes: Routes = [
  {path: '', component: SplashScreenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'select', component: SelectDateAndPlacesComponent},
  {path: 'select-flights', component: SelectFlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
