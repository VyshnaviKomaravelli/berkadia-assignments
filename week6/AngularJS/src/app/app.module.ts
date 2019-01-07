import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UpdatesComponent } from './updates/updates.component';
import { OthersComponent } from './others/others.component';
import {Route2Service } from './updates/route2.service';
import {LazyModule} from '../lazy/lazy.module'
export const appRoutes:Routes=[
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home/:id', component: HomeComponent,},
  { path: 'home', component: HomeComponent,},
  { path: 'contact',component: ContactComponent,
   loadChildren:'../lazy/lazy.module#LazyModule'
},
  { path: 'updates', component:UpdatesComponent,canActivate:[Route2Service]},
  { path: '**', component:OthersComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    UpdatesComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
