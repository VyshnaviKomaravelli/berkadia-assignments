import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
drivers;
  constructor(private readonly data:DataService) { }

  ngOnInit() {
this.data.getDrivers().subscribe((res:any)=>{
this.drivers=res.driver;
console.log(this.drivers);


});
  }

}
