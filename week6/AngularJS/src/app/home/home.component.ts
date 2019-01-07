import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import {Route1Service} from './route1.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
username;
pwd;id;
login1=false;
constructor(private router:Router,private readonly route:ActivatedRoute,private routeServices:Route1Service) {
    
   }
   Login(){
    localStorage["login1"]=true;
    this.router.navigate(['/updates']);
   
    return true;
  }
  Logout(){
    localStorage["login1"]=false;
   
    return false;
  }


  ngOnInit() {
    localStorage["id"]=this.route.snapshot.paramMap.get('id');
    console.log(localStorage["id"]);
    this.login1=localStorage['login1'];
   // console.log(localStorage['login1']);
  }

}

