import { Component, OnInit } from '@angular/core';
import {AirQualityServiceService} from '../air-quality-service.service'
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  country=[];
  constructor(private readonly AirQualityService:AirQualityServiceService){}
  ngOnInit()
  {
  this.AirQualityService.getCountriesAirData().subscribe((res:any)=>{
  this.country=res['results'];
  })
  }

}
