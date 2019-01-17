import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username="";
password="";
error="";
user;
result;
  constructor(private readonly router:Router,private login:DataService) { }

  ngOnInit() {
 if(localStorage.getItem('logged')=='true'){
    this.router.navigate(['/home']);
  }
}
home()
{
  this.login.login(this.username,this.password).subscribe((res:any)=>{
    console.log(res);
    this.user=res.users[0].name;
    this.result=res.users.length;
    if(this.result==1){
      console.log("Authentication Successfull")
  localStorage.setItem('logged','true'); localStorage.setItem('username',this.user);
  this.router.navigate(['/home']);
    }
    else{
      this.error="Invalid credentials";
    }
});

}
}
