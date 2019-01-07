import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirQualityServiceService {
  private url="https://api.openaq.org/v1/countries";
  private url1="https://api.openaq.org/v1/cities"
  constructor(private readonly http:HttpClient) {}
  getCountriesAirData()
  {
  return this.http.get(this.url);
  }
  getCitiesAirData()
  {
  return this.http.get(this.url1);
  }
  


 
    
 
}
