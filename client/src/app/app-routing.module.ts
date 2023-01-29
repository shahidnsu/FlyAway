import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SelectDateAndPlacesComponent } from './components/select-date-and-places/select-date-and-places.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

const routes: Routes = [
  {path: '', component: SplashScreenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'select-flights', component: SelectDateAndPlacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
