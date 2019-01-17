import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DriverBookingComponent } from './driver-booking/driver-booking.component';
const routes: Routes = [
  { path: '', component: LoginComponent,pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path:'bookings',component: BookingsComponent},
  { path:'book/:id',component:DriverBookingComponent}

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
