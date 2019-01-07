import { Component, OnInit } from '@angular/core';
import {AirQualityServiceService} from '../air-quality-service.service'
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  city1=[];
  constructor(private readonly AirQualityService:AirQualityServiceService){}
  ngOnInit()
  {
  this.AirQualityService.getCitiesAirData().subscribe((res:any)=>{
  this.city1=res['results'];
  })
  }
}
