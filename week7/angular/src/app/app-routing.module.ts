import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CitiesComponent } from './cities/cities.component';
import { HomeComponent } from './home/home.component';


export const appRoutes:Routes=[
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'countries', component: CountriesComponent},
    { path: 'cities', component: CitiesComponent},
    { path: 'home', component: HomeComponent}
   ]
  
@NgModule({
  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:
  [RouterModule]
 
})
export class AppRoutingModule { }
