import { Injectable } from '@angular/core';
import { Router,CanActivate} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class Route1Service {
 

  constructor(private router:Router) { }
}
