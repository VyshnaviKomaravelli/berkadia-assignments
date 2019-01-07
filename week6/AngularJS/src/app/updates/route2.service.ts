import { Injectable } from '@angular/core';
import { Router,CanActivate} from '@angular/router';
 import { HomeComponent } from '../home/home.component';
@Injectable({
  providedIn: 'root'
})
export class Route2Service implements CanActivate{
  canActivate():boolean{
    console.log(localStorage['login1']);
    if(localStorage['login1']=="true")
    {
    console.log(localStorage['login1']);
    return true;
    }
    else{
      this.router.navigate(['../home']);
      alert("You need to login to get access of this page!");
      return false;
    }
  }
  constructor(private router:Router) { }
 
}
